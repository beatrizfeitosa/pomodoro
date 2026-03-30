import styles from './styles.module.css';

type DefaultInputProps = {
  id: 'string';
  labelText?: 'string';
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  labelText,
  ...otherAttributes
}: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input
        placeholder='Digite sua tarefa'
        className={styles.input}
        id={id}
        type={type}
        {...otherAttributes}
      />
    </>
  );
}
