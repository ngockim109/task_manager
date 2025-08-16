export interface ICountryConfig {
  label: string
  pattern: RegExp
  format: (num: string) => string
  placeholder: string
}

export interface ICountryConfigs {
  [countryCode: string]: ICountryConfig
}

export const countryConfigs: ICountryConfigs = {
  '+84': {
    label: '+84 (Vietnam)',
    pattern: /^[0-9]{8,9}$/,
    format: (num: string) => num.replace(/^0/, ''),
    placeholder: '987654321',
  },
}
