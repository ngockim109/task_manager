import React, { useState } from 'react'
import Input from './Input'
import Select from './Select'
import type { InputProps } from './Input'
import { countryConfigs } from '@/utils/phone'

export interface PhoneInputProps extends InputProps {
  error?: boolean
  errorMessage?: string
  defaultCountryCode?: '+84'
  onValidationChange?: (isValid: boolean, phone: string, code: string) => void
}

const PhoneInput = ({
  value,
  onChange,
  className,
  error = false,
  onValidationChange,
  defaultCountryCode = '+84',
  placeholder,
  ...props
}: PhoneInputProps) => {
  const [phoneValue, setPhoneValue] = useState(value)
  const [countryCode, setCountryCode] = useState('+84')
  const [isValid, setIsValid] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  const countryOptions = Object.entries(countryConfigs).map(
    ([code, config]) => ({ value: code, label: config.label }),
  )

  const validatePhone = (
    selectedCountryCode: string,
    phone?: string,
  ): boolean => {
    if (!phone) {
      setIsValid(false)
      setErrorMessage('Please enter phone number!')
      return false
    }

    const config = countryConfigs[selectedCountryCode]
    if (!config) {
      setIsValid(false)
      setErrorMessage('Country is not supported!')
      return false
    }

    const formattedPhone = config.format(phone)

    if (!config.pattern.test(formattedPhone)) {
      setIsValid(false)
      setErrorMessage('Phone number is not valid!')
      return false
    }
    setIsValid(true)
    setErrorMessage('')
    return true
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setPhoneValue(newValue)

    const isValidPhone = validatePhone(countryCode, phoneValue as string)
    onValidationChange?.(isValidPhone, newValue, countryCode)

    const fullPhone =
      countryCode + (countryConfigs[countryCode].format(newValue) || newValue)
    onChange?.({ ...e, target: { ...e.target, value: fullPhone } })
  }

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountryCode = e.target.value
    setCountryCode(newCountryCode)

    if (phoneValue) {
      const isValidPhone = validatePhone(countryCode, phoneValue as string)
      onValidationChange?.(isValidPhone, phoneValue as string, countryCode)
    }
  }

  const currentConfig = countryConfigs[countryCode]

  return (
    <div className="flex gap-1">
      <div className="w-48">
        <Select
          options={countryOptions}
          value={countryCode}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleCountryChange(e)
          }
          error={!isValid}
        />
      </div>
      <Input
        value={phoneValue}
        onChange={handlePhoneChange}
        className={className}
        type="tel"
        error={!isValid}
        errorMessage={errorMessage}
        placeholder={currentConfig.placeholder || placeholder}
      />
    </div>
  )
}

export default PhoneInput
