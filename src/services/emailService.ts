interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

class EmailService {
  async sendContactForm(formData: ContactFormData): Promise<boolean> {
    console.log('Sending form data:', formData);
    
    // Try multiple services in order of preference
    const services = [
      () => this.sendViaFormsubmit(formData),
      () => this.sendViaGetform(formData),
      () => this.sendViaNetlify(formData)
    ];

    for (const service of services) {
      try {
        const success = await service();
        if (success) {
          return true;
        }
      } catch (error) {
        console.log('Service failed, trying next...', error);
        continue;
      }
    }

    console.error('All email services failed');
    return false;
  }

  private async sendViaFormsubmit(formData: ContactFormData): Promise<boolean> {
    try {
      console.log('Trying Formsubmit...');
      
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('phone', formData.phone || 'Not provided');
      formDataObj.append('service', formData.service || 'Not specified');
      formDataObj.append('message', formData.message);
      formDataObj.append('_subject', 'New Contact Form Submission from Hian Technologies');
      formDataObj.append('_captcha', 'false');
      formDataObj.append('_template', 'table');
      
      const response = await fetch('https://formsubmit.co/contact@hiantechnologies.com', {
        method: 'POST',
        body: formDataObj
      });

      if (response.ok) {
        console.log('Email sent successfully via Formsubmit!');
        return true;
      } else {
        console.error('Formsubmit error:', response.status, response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Formsubmit request failed:', error);
      return false;
    }
  }

  private async sendViaGetform(formData: ContactFormData): Promise<boolean> {
    try {
      console.log('Trying Getform...');
      
      const response = await fetch('https://getform.io/f/paqdyqzb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          service: formData.service || 'Not specified',
          message: formData.message,
          subject: 'New Contact Form Submission from Hian Technologies'
        })
      });

      if (response.ok) {
        console.log('Email sent successfully via Getform!');
        return true;
      } else {
        console.error('Getform error:', response.status, response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Getform request failed:', error);
      return false;
    }
  }

  private async sendViaNetlify(formData: ContactFormData): Promise<boolean> {
    try {
      console.log('Trying Netlify Forms...');
      
      const formDataObj = new FormData();
      formDataObj.append('form-name', 'contact');
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('phone', formData.phone || 'Not provided');
      formDataObj.append('service', formData.service || 'Not specified');
      formDataObj.append('message', formData.message);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataObj as any).toString()
      });

      if (response.ok) {
        console.log('Email sent successfully via Netlify!');
        return true;
      } else {
        console.error('Netlify error:', response.status, response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Netlify request failed:', error);
      return false;
    }
  }
}

export const emailService = new EmailService();
export type { ContactFormData };