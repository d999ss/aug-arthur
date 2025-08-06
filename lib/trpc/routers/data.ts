import { TRPCError } from '@trpc/server';

import { jobPostings } from '@/lib/data/careers';
import { milestones } from '@/lib/data/history';
import { leaders } from '@/lib/data/leadership';
import { locations } from '@/lib/data/locations';
import { newsArticles } from '@/lib/data/news';
import {
  jobPostingSchema,
  locationSchema,
  milestoneSchema,
  leaderSchema,
  newsArticleSchema,
} from '@/lib/validators';
import { errorHandlingProcedure, router } from '../server';

export const dataRouter = router({
  getLocations: errorHandlingProcedure
    .query(async () => {
      try {
        // Validate data before returning
        const validatedLocations = locations.map(location => 
          locationSchema.parse(location)
        );
        
        return {
          success: true,
          data: validatedLocations,
        };
      } catch (error) {
        console.error('Error fetching locations:', error);
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to fetch locations',
        });
      }
    }),

  getNews: errorHandlingProcedure
    .query(async () => {
      try {
        const validatedNews = newsArticles.map(article => 
          newsArticleSchema.parse(article)
        );
        
        return {
          success: true,
          data: validatedNews,
        };
      } catch (error) {
        console.error('Error fetching news:', error);
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to fetch news',
        });
      }
    }),

  getCareers: errorHandlingProcedure
    .query(async () => {
      try {
        const validatedJobs = jobPostings.map(job => 
          jobPostingSchema.parse(job)
        );
        
        return {
          success: true,
          data: validatedJobs,
        };
      } catch (error) {
        console.error('Error fetching careers:', error);
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to fetch careers',
        });
      }
    }),

  getLeadership: errorHandlingProcedure
    .query(async () => {
      try {
        const validatedLeaders = leaders.map(leader => 
          leaderSchema.parse(leader)
        );
        
        return {
          success: true,
          data: validatedLeaders,
        };
      } catch (error) {
        console.error('Error fetching leadership:', error);
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to fetch leadership',
        });
      }
    }),

  getHistory: errorHandlingProcedure
    .query(async () => {
      try {
        const validatedMilestones = milestones.map(milestone => 
          milestoneSchema.parse(milestone)
        );
        
        return {
          success: true,
          data: validatedMilestones,
        };
      } catch (error) {
        console.error('Error fetching history:', error);
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to fetch history',
        });
      }
    }),
});
