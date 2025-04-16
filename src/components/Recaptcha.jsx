import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha = ({ recaptchaRef, error, onChange }) => {
    return (
        <div className="form-group">
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LeKOBcrAAAAAIuXN68c5k1s6I5MOQFg-gpnSGsy"
                onChange={onChange}
            />
            {error && (
                <p id="recaptcha-error" className="error-message">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Recaptcha;