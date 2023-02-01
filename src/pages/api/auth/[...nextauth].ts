import NextAuth from 'next-auth';

import { nextAuthOptions } from '@/common/auth.config';

export default NextAuth(nextAuthOptions);
