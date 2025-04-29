function Description({ classes }) {
  return (
    <p className={!classes ? "" : classes}>
      A digital signature is a cryptographic technique used to verify the
      authenticity and integrity of digital messages or documents. It ensures
      that the content has not been altered and confirms the identity of the
      sender. Digital signatures use asymmetric encryption, typically involving
      a private key to sign and a public key to verify. They provide
      non-repudiation, meaning the signer cannot deny the authenticity of the
      signed content. Commonly used in emails, software distribution, and legal
      documents, digital signatures enhance data security and trust in
      electronic communications. They are legally recognized in many countries
      and comply with global standards like PKI (Public Key Infrastructure).
    </p>
  );
}

export default Description;
