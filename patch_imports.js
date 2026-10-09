const fs = require('fs');
const content = fs.readFileSync('src/AssessmentPage.tsx', 'utf8');

const importsToAdd = `
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import DOMPurify from 'dompurify';

const leadSchema = z.object({
  firstName: z.string().min(1, 'First Name is required').max(50, 'First Name is too long'),
  lastName: z.string().min(1, 'Last Name is required').max(50, 'Last Name is too long'),
  email: z.string().email('Please enter a valid email address').max(100, 'Email is too long'),
  phone: z.string().max(20, 'Phone number is too long').optional(),
  city: z.string().max(50, 'City is too long').optional(),
  state: z.string().max(50, 'State is too long').optional(),
  marketingOptIn: z.boolean().default(false),
});

type LeadFormData = z.infer<typeof leadSchema>;
`;

const updatedContent = content.replace(
  "import logoImg from './images2/BeABusinessBrokerLogo.webp';",
  importsToAdd + "\nimport logoImg from './images2/BeABusinessBrokerLogo.webp';"
);

fs.writeFileSync('src/AssessmentPage.tsx', updatedContent);
console.log('Imports added.');
