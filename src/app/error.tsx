'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    const isChunkError =
      error.name === 'ChunkLoadError' ||
      error.message.includes('Loading chunk') ||
      error.message.includes('Failed to fetch dynamically imported module')

    if (isChunkError) window.location.reload()
  }, [error])

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <p className="text-lg">Что-то пошло не так</p>
      <button onClick={reset} className="rounded px-4 py-2 underline">
        Попробовать снова
      </button>
    </div>
  )
}
