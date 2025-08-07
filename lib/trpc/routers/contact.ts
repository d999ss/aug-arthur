import { TRPCError } from '@trpc/server';

import { contactFormSchema } from '@/lib/validators';
import { errorHandlingProcedure, router } from '../server';

export const contactRouter = router({
  submit: errorHandlingProcedure
    .input(contactFormSchema)
    .mutation(async ({ input }) => {
      try {
        // Simulate email sending delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // In a real app, you would send an email here
        console.log('Contact form submission:', input);
        
        // Simulate occasional failures for testing
        if (Math.random() < 0.1) {
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Failed to send message. Please try again.',
          });
        }
        
        return {
          success: true,
          message: `Thank you ${input.name}! We'll get back to you soon.`,
        };
      } catch (error) {
        console.error('Contact form error:', error);
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to send message. Please try again.',
        });
      }
    }),
});
