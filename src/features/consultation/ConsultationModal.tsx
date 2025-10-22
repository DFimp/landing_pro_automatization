"use client"

import { useState } from "react";
import XIcon from "@/features/consultation/XIcon";
import Button from "@/shared/ui/button/Button";
import Input from "@/shared/ui/Input/Input";
import Modal from "@/shared/ui/Modal/Modal";
import Loader from "@/shared/ui/Loader/Loader"; // Импортируем компонент лоадера
import CustomAlert from "@/shared/ui/CustomAlert/CustomAlert"; // Импортируем кастомный alert
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface FormData {
  name: string;
  phone: string;
  monthsCount: number;
  usersCount: number;
  amoTariff: string;
  selectedTariff: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  monthsCount?: number;
  usersCount?: number;
  amoTariff?: string;
  selectedTariff?: string;
}

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTariff?: string;
  prefilledMonths?: number;
  prefilledAmoTariff?: string;
  prefilledUsers?: number;
}

interface AlertState {
  isVisible: boolean;
  type: 'success' | 'error';
  message: string;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ 
  isOpen, 
  onClose, 
  selectedTariff = '',
  prefilledMonths = 0,
  prefilledAmoTariff = '',
  prefilledUsers = 0
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    monthsCount: 0,
    usersCount: 0,
    amoTariff: '',
    selectedTariff: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertState>({
    isVisible: false,
    type: 'success',
    message: ''
  });

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

  const showAlert = (type: 'success' | 'error', message: string) => {
    setAlert({
      isVisible: true,
      type,
      message
    });
  };

  const hideAlert = () => {
    setAlert(prev => ({ ...prev, isVisible: false }));
  };

  const handleSubmit = async (): Promise<void> => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
  
    try {
      // Формируем данные для отправки
      const payload = {
        name: formData.name,
        phoneNumber: formData.phone.replace(/\D/g, ''),
        monthsCount: prefilledMonths,
        usersCount: prefilledUsers,
        amoTariff: prefilledAmoTariff,
        selectedTariff: selectedTariff
      };

      // Отправляем POST-запрос на бэкенд
      await axios.post(`${API_URL}/lead-management/new-landing-lead`, payload);

      // Показываем успешное уведомление
      showAlert('success', 'Запрос принят! Наш эксперт свяжется с вами в ближайшее время.');

      // Очищаем форму и закрываем модальное окно
      setFormData({ name: '', phone: '', monthsCount: 0, usersCount: 0, amoTariff: '', selectedTariff: '' });
      setErrors({});
      onClose();
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      
      // Показываем уведомление об ошибке
      showAlert('error', 'Что-то пошло не так. Попробуйте позже или свяжитесь с нами.');
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
    setFormData({ name: '', phone: '', monthsCount: 0, usersCount: 0, amoTariff: '', selectedTariff: '' });
    setErrors({});
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Записаться на консультацию
            </h2>
            <button
              onClick={handleClose}
              className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors p-1"
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            />
            
            <Input
              label="Номер телефона"
              value={formData.phone}
              onChange={handleInputChange('phone')}
              placeholder="+7 (___) ___-__-__"
              mask="phone"
              error={errors.phone}
              disabled={isSubmitting}
            />

            <div className="flex gap-3 pt-4">
              <Button
                text={
                  <div className="flex items-center justify-center gap-2">
                    {isSubmitting && <Loader size="small" color="#ffffff" />}
                    {isSubmitting ? 'Отправка...' : 'Записаться на консультацию'}
                  </div>
                }
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-1"
              >
              </Button>
            </div>
          </div>
        </div>
      </Modal>

      {/* Кастомный Alert */}
      <CustomAlert
        isVisible={alert.isVisible}
        type={alert.type}
        message={alert.message}
        duration={6000} // 6 секунд
        onClose={hideAlert}
      />
    </>
  );
};

export default ConsultationModal;