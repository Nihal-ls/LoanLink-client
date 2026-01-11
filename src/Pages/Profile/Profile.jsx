import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useRole from '../../Hooks/useRole';
import toast, { Toaster } from 'react-hot-toast';
import { Camera, User, Mail, ShieldCheck, Fingerprint, Edit3, Check, X } from 'lucide-react';

const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  const { role } = useRole();

  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    try {
      setLoading(true);
      await updateUserProfile(displayName, photoURL);
      toast.success('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      toast.error('Failed to update profile');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-transparent">
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl max-w-4xl w-full overflow-hidden border border-white/20">
        
        <div className="flex flex-col md:flex-row">
          
          <div className="md:w-1/3 bg-orange-400 p-8 flex flex-col items-center justify-center text-white">
            <div className="relative group">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/50 shadow-xl mb-4 transition-transform group-hover:scale-105">
                <img
                  src={photoURL || 'https://via.placeholder.com/150'}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {isEditing && (
                <div className="absolute bottom-6 right-2 bg-white text-orange-400 p-2 rounded-full shadow-lg">
                  <Camera size={20} />
                </div>
              )}
            </div>
            
            <h2 className="text-2xl font-bold text-center leading-tight">{displayName || 'Anonymous'}</h2>
            <div className="flex items-center mt-2 px-4 py-1 bg-white/20 rounded-full backdrop-blur-sm border border-white/10">
              <ShieldCheck size={14} className="mr-2" />
              <span className="text-sm font-medium uppercase tracking-wider">{role}</span>
            </div>
          </div>

          <div className="md:w-2/3 p-8 md:p-12">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">Account Settings</h3>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors"
                >
                  <Edit3 size={18} /> Edit Profile
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="group">
                <label className="flex items-center text-xs font-bold text-gray-400 uppercase mb-2 ml-1">
                  <User size={14} className="mr-2" /> Full Name
                </label>
                <input
                  type="text"
                  value={displayName}
                  disabled={!isEditing}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                    isEditing 
                      ? 'border-orange-400 ring-2 ring-orange-100 bg-white' 
                      : 'border-transparent bg-gray-50/50 text-gray-600'
                  }`}
                />
              </div>

              <div className="group">
                <label className="flex items-center text-xs font-bold text-gray-400 uppercase mb-2 ml-1">
                  <Camera size={14} className="mr-2" /> Avatar URL
                </label>
                <input
                  type="text"
                  value={photoURL}
                  disabled={!isEditing}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                    isEditing 
                      ? 'border-orange-400 ring-2 ring-orange-100 bg-white' 
                      : 'border-transparent bg-gray-50/50 text-gray-600'
                  }`}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-xs font-bold text-gray-400 uppercase mb-2 ml-1">
                    <Mail size={14} className="mr-2" /> Email Address
                  </label>
                  <div className="px-4 py-3 rounded-xl bg-gray-100/50 text-gray-500 border border-gray-100 flex items-center">
                    {user?.email}
                  </div>
                </div>
                <div>
                  <label className="flex items-center text-xs font-bold text-gray-400 uppercase mb-2 ml-1">
                    <Fingerprint size={14} className="mr-2" /> User ID
                  </label>
                  <div className="px-4 py-3 rounded-xl bg-gray-100/50 text-gray-400 text-xs border border-gray-100 truncate">
                    {user?.uid}
                  </div>
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="mt-10 flex gap-4 animate-in fade-in slide-in-from-bottom-4">
                <button
                  onClick={handleUpdate}
                  disabled={loading}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-xl font-bold shadow-lg shadow-orange-200 transition-all active:scale-95 disabled:opacity-70"
                >
                  {loading ? 'Processing...' : <><Check size={18} /> Save Changes</>}
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl font-bold transition-all flex items-center gap-2"
                >
                  <X size={18} /> Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Profile;