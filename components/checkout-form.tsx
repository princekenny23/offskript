"use client";

import { useState } from "react";

export function CheckoutForm() {
  const [submitted, setSubmitted] = useState(false);
  return <form className="form-layout checkout-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><div className="form-fields"><div className="eyebrow">Contact and delivery</div><label>Full name<input required autoComplete="name" /></label><label>Email address<input type="email" required autoComplete="email" /></label><label>Phone number<input type="tel" autoComplete="tel" /></label><label>Delivery address<textarea required rows={3} autoComplete="street-address" /></label><label>City or district<input required /></label><button className="button button-dark" type="submit">{submitted ? "Details received" : "Continue"}</button>{submitted && <p className="form-notice" role="status">This is a prototype. No order was created and no payment was collected.</p>}</div><aside className="form-aside"><div className="eyebrow">Payment</div><p>Available payment methods and delivery charges will be shown here once checkout is connected.</p><p className="prototype-note">Sample prices are not verified. No payment is accepted on this site.</p></aside></form>;
}