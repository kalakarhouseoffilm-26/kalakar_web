import { useFormInput } from './useFormInput'
import styles from './FormInput.module.css'

export type FormInputProps = {
  id: string
  label: string
  type?: 'text' | 'email' | 'tel'
  value: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
  error?: string
}

export function FormInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
}: FormInputProps) {
  const { inputId, errorId } = useFormInput(id)

  return (
    <div className={styles.root}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
      />
      {error && (
        <span id={errorId} className={styles.error} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}
