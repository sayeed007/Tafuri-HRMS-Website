// 2. SERVER-SIDE DETECTION STRATEGY
// Create a server component wrapper that checks cookies instead of localStorage

// lib/popup-utils.ts
import { cookies } from 'next/headers';

export function shouldShowPopup() {
    const cookieStore = cookies();
    return !cookieStore?.has('hr-popup-seen');
}