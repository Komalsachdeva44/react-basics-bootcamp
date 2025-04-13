import React from 'react';
import { useForm } from 'react-hook-form';

function ModernForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  // Inline styles as JS objects
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#f3f4f6',
      fontFamily: 'Arial, sans-serif'
    },
    form: {
      background: 'white',
      padding: '2rem 3rem',
      borderRadius: '10px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      width: '350px'
    },
    title: {
      textAlign: 'center',
      marginBottom: '1.5rem',
      fontSize: '1.5rem'
    },
    input: {
      width: '100%',
      padding: '10px 12px',
      marginBottom: '1rem',
      border: '2px solid #ccc',
      borderRadius: '6px',
      fontSize: '1rem',
      outline: 'none',
      transition: '0.2s ease-in-out'
    },
    inputError: {
      borderColor: '#ef4444'
    },
    errorText: {
      color: '#ef4444',
      marginTop: '-0.8rem',
      marginBottom: '1rem',
      fontSize: '0.875rem'
    },
    button: {
      width: '100%',
      padding: '10px',
      border: 'none',
      borderRadius: '6px',
      backgroundColor: '#3b82f6',
      color: 'white',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 style={styles.title}>Login</h2>

        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter a valid email"
            }
          })}
          placeholder="Enter your email"
          style={{
            ...styles.input,
            ...(errors.email ? styles.inputError : {})
          }}
        />
        {errors.email && <p style={styles.errorText}>{errors.email.message}</p>}

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

export default ModernForm;
