import { useState } from 'react'
import Label from '@/components/common/Label'
import PhoneInput from '@/components/common/PhoneInput'
import Button from '@/components/common/Button'

const PhoneInputForm = () => {
  const [phone, setPhone] = useState<string>('')
  const [isPhoneValid, setPhoneValid] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [country, setCountry] = useState<string>('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(phone, isPhoneValid, country)
  }
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className='flex justify-center items-center flex-col'>
      <h3>Sign in</h3>
      <small>Please enter your phone to sign in</small>
      <div>
        <Label error={isPhoneValid}>Phone Input</Label>
        <PhoneInput
          onChange={(e) => setPhone(e.target.value)}
          onValidationChange={(isValid, _phone, code) => {
            setPhoneValid(isValid)
            setCountry(code)
          }}
        />
      </div>
      <div className="w-full">
        <Button loading={isLoading}>Next</Button>
      </div>
      </div>
      
    </form>
  )
}

export default PhoneInputForm
