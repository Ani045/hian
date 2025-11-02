# 🔧 Email Setup Instructions

## The Issue

The current form endpoints are demo/test accounts that may not deliver emails to your specific email address. You need to set up your own form endpoint.

## Solution 1: Formspree (Recommended - 5 minutes)

### Step 1: Create Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up with your email
3. Verify your email address

### Step 2: Create Form
1. Click "New Form"
2. Enter form name: "Hian Technologies Contact"
3. Copy the form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)

### Step 3: Update Code
1. Open `src/pages/ContactPage.tsx`
2. Find line 74: `action="https://formspree.io/f/xdknzpjy"`
3. Replace with your endpoint: `action="https://formspree.io/f/YOUR_FORM_ID"`

### Step 4: Test
1. Run `npm run dev`
2. Submit the form
3. Check your email!

## Solution 2: Web3Forms (Alternative - 3 minutes)

### Step 1: Get Access Key
1. Go to [web3forms.com](https://web3forms.com)
2. Enter your email: `contact@hiantechnologies.com`
3. Click "Create Access Key"
4. Check your email for the access key

### Step 2: Update Code
Replace the form in `ContactPage.tsx` with:

```tsx
<form 
  action="https://api.web3forms.com/submit"
  method="POST"
  onSubmit={() => setIsSubmitting(true)}
  className="space-y-6"
>
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
  <input type="hidden" name="subject" value="New Contact Form Submission from Hian Technologies" />
  <input type="hidden" name="redirect" value={`${window.location.origin}?success=true`} />
  
  <!-- rest of form fields -->
```

## Solution 3: EmailJS (Most Features)

### Step 1: Setup EmailJS
1. Go to [emailjs.com](https://emailjs.com)
2. Create account and verify email
3. Add email service (Gmail/Outlook)
4. Create email template
5. Get Service ID, Template ID, and Public Key

### Step 2: Add to .env
```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

### Step 3: Use existing emailService.ts
The code is already there, just need to configure the environment variables.

## Quick Test (No Setup Required)

For immediate testing, you can use this temporary form that forwards to my test email:

```tsx
<form 
  action="https://formsubmit.co/ajax/test.forward.hian@example.com"
  method="POST"
>
```

But for production, use one of the solutions above.

## Verification

After setup, test by:
1. Filling out the form
2. Submitting it
3. Checking your email inbox (and spam folder)
4. Looking for the subject: "New Contact Form Submission from Hian Technologies"

## Need Help?

If emails are still not arriving:
1. Check spam/junk folder
2. Verify email address spelling
3. Try a different email service
4. Contact the form service support

The issue is almost always that the demo endpoints don't forward to your specific email. Setting up your own endpoint will fix this immediately!