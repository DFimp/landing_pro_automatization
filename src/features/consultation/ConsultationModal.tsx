"use client"

import { useState } from "react";
import XIcon from "@/features/consultation/XIcon";
import Button from "@/shared/ui/button/Button";
import Input from "@/shared/ui/Input/Input";
import Modal from "@/shared/ui/Modal/Modal";
import FormData from "@/shared/types/IFormData";

interface FormErrors {
  name?: string;
  phone?: string;
}

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => Promise<void>;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit 
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
    }
    
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!phoneDigits || phoneDigits.length !== 11) {
      newErrors.phone = 'Пожалуйста, введите корректный номер телефона';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (): Promise<void> => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
      setFormData({ name: '', phone: '' });
      setErrors({});
      onClose();
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData) => (value: string): void => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleClose = (): void => {
    setFormData({ name: '', phone: '' });
    setErrors({});
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Записаться на консультацию
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
          >
            <XIcon size={24} />
          </button>
        </div>
        
        <p className="text-gray-600 mb-8">
          Оставьте свои контактные данные, и наш эксперт свяжется с вами для бесплатной консультации по amoCRM
        </p>

        <div>
          <Input
            label="Ваше имя"
            value={formData.name}
            onChange={handleInputChange('name')}
            placeholder="Введите ваше имя"
            error={errors.name}
            maxLength={300}
          />
          
          <Input
            label="Номер телефона"
            value={formData.phone}
            onChange={handleInputChange('phone')}
            placeholder="+7 (___) ___-__-__"
            mask="phone"
            error={errors.phone}
          />

          <div className="flex gap-3 pt-4">
            <Button
              text={isSubmitting ? 'Отправка...' : 'Записаться на консультацию'}
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex-1"
            >
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConsultationModal;