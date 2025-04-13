import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc,
  serverTimestamp
} from 'firebase/firestore';
import { type Firestore } from 'firebase/firestore';
import { db } from '../firebase';

export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  avatar: string;
  phone?: string;
  location?: string;
  dob?: string;
  gender?: string;
  language?: string;
  timezone?: string;
  createdAt?: string;
  address?: {
    street?: string;
    unit?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  };
  preferences: {
    emailNotifications: boolean;
    smsNotifications: boolean;
    marketingPreferences: boolean;
  };
  security: {
    twoFactorAuth: boolean;
  };
}

export const createUserProfile = async (uid: string, data: Partial<UserProfile>): Promise<void> => {
  if (!uid) throw new Error('User ID is required');
  if (!data.email) throw new Error('Email is required');

  try {
    const userRef = doc(db, 'users', uid);
    const userSnapshot = await getDoc(userRef);

    // If user already exists, don't overwrite all data
    if (userSnapshot.exists()) {
      const existingData = userSnapshot.data();
      await updateDoc(userRef, {
        ...data,
        updatedAt: serverTimestamp()
      });
      return;
    }

    // For new users, create complete profile
    const userProfile: UserProfile = {
      uid,
      name: data.name || data.email.split('@')[0],
      email: data.email,
      avatar: data.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${uid}`,
      preferences: {
        emailNotifications: true,
        smsNotifications: false,
        marketingPreferences: false,
        ...data.preferences
      },
      security: {
        twoFactorAuth: false,
        ...data.security
      },
      createdAt: new Date().toISOString(),
      ...data
    };

    await setDoc(userRef, {
      ...userProfile,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

  } catch (error: any) {
    console.error('Error in createUserProfile:', error);
    throw new Error(error.message || 'Failed to create user profile');
  }
};

export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  try {
    const userRef = doc(db, 'users', uid);
    const docSnap = await getDoc(userRef);
    
    if (!docSnap.exists()) {
      return null;
    }
    
    const data = docSnap.data();
    return {
      ...data,
      createdAt: data.createdAt?.toDate?.()?.toISOString() || new Date().toISOString()
    } as UserProfile;
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw new Error('Failed to get user profile');
  }
};

export const updateUserProfile = async (uid: string, data: Partial<UserProfile>): Promise<void> => {
  try {
    const userRef = doc(db as Firestore, 'users', uid);
    // Remove undefined values to prevent overwriting with undefined
    const cleanData = Object.entries(data).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, any>);

    await updateDoc(userRef, cleanData);
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw new Error('Failed to update user profile');
  }
};
