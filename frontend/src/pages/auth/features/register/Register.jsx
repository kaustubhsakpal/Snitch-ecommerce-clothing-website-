import React, { useState } from 'react'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <main className="register-page">
      <style>{`
        .register-page { min-height: 100vh; display: grid; place-items: center; padding: 2rem 1rem; background: #f5f7fb; color: #172033; font-family: Inter, system-ui, sans-serif; }
        .register-card { display: grid; grid-template-columns: 0.9fr 1.1fr; width: min(900px, 100%); overflow: hidden; border: 1px solid #e5e9f1; border-radius: 22px; background: #fff; box-shadow: 0 18px 50px #2638581a; }
        .register-welcome { padding: 3.5rem 2.75rem; background: linear-gradient(145deg, #273d88, #596fd0); color: #fff; }
        .brand { display: flex; align-items: center; gap: .6rem; margin-bottom: 5rem; font-size: 1.25rem; font-weight: 800; }
        .brand-icon { display: grid; place-items: center; width: 2.1rem; height: 2.1rem; border-radius: .65rem; background: #fff; color: #4058bd; }
        .register-welcome h1 { margin: 0 0 1rem; font-size: clamp(2rem, 4vw, 2.8rem); line-height: 1.08; letter-spacing: -1px; }
        .register-welcome p { margin: 0; color: #e1e6ff; line-height: 1.7; }
        .register-form { padding: 3.5rem clamp(2rem, 6vw, 4.5rem); }
        .register-form h2 { margin: 0 0 .5rem; font-size: 1.75rem; }
        .subtitle { margin: 0 0 1.8rem; color: #778096; font-size: .9rem; }
        .field { display: block; margin-bottom: 1rem; color: #344054; font-size: .82rem; font-weight: 700; }
        .field input { width: 100%; margin-top: .5rem; padding: .8rem .85rem; border: 1px solid #dce2ec; border-radius: .55rem; outline: 0; font: inherit; }
        .field input:focus { border-color: #536bd0; box-shadow: 0 0 0 3px #536bd01c; }
        .password { position: relative; display: block; }
        .password input { padding-right: 4rem; }
        .password button { position: absolute; right: .7rem; bottom: .7rem; border: 0; background: none; color: #536bd0; cursor: pointer; font-weight: 700; }
        .terms { display: flex; gap: .5rem; margin: .25rem 0 1.35rem; color: #778096; font-size: .75rem; line-height: 1.5; }
        .terms input { margin-top: .2rem; accent-color: #536bd0; }
        a { color: #435bc1; font-weight: 700; text-decoration: none; }
        .submit { width: 100%; padding: .85rem; border: 0; border-radius: .55rem; background: #536bd0; color: #fff; cursor: pointer; font: inherit; font-weight: 700; }
        .submit:hover { background: #4058bd; }
        .login { margin: 1.5rem 0 0; color: #778096; text-align: center; font-size: .82rem; }
        @media (max-width: 680px) { .register-card { grid-template-columns: 1fr; } .register-welcome { padding: 2rem; } .brand { margin-bottom: 2rem; } .register-welcome p { display: none; } .register-form { padding: 2.25rem 2rem; } }
      `}</style>
      <section className="register-card">
        <div className="register-welcome">
          <div className="brand"><span className="brand-icon">S</span>Snitch</div>
          <h1>Join a smarter way to stay connected.</h1>
          <p>Create your account and get everything you need in one simple, secure place.</p>
        </div>
        <div className="register-form">
          <h2>Create your account</h2>
          <p className="subtitle">Get started with your free account today.</p>
          <form onSubmit={handleSubmit}>
            <label className="field">Full name<input name="name" type="text" placeholder="Enter your full name" autoComplete="name" required /></label>
            <label className="field">Email address<input name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></label>
            <label className="field">Password<span className="password"><input name="password" type={showPassword ? 'text' : 'password'} placeholder="At least 8 characters" minLength="8" autoComplete="new-password" required /><button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button></span></label>
            <label className="terms"><input type="checkbox" required /><span>I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>.</span></label>
            <button className="submit" type="submit">Create account</button>
          </form>
          <p className="login">Already have an account? <a href="/login">Sign in</a></p>
        </div>
      </section>
    </main>
  )
}

export default Register