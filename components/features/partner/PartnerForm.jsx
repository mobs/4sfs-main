import Button from '@/components/ui/Button';
import React, { useState } from 'react';
import { FaUser, FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaBuilding, FaUserTie, FaImage, FaHome, FaComments } from 'react-icons/fa';

const PartnerForm = ({ onSubmit, formTitle }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNo: '',
    whatsappNo: '',
    email: '',
    city: '',
    address: '',
    partnerType: '',
    officePhotos: null,
    dealingIn: [],
    comments: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      officePhotos: e.target.files
    }));
  };

  const handleDealingInChange = (value) => {
    const newDealingIn = formData.dealingIn.includes(value)
      ? formData.dealingIn.filter(item => item !== value)
      : [...formData.dealingIn, value];
    
    setFormData(prev => ({
      ...prev,
      dealingIn: newDealingIn
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phoneNo.trim()) newErrors.phoneNo = 'Phone number is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.partnerType) newErrors.partnerType = 'Partner type is required';
    if (formData.dealingIn.length === 0) newErrors.dealingIn = 'Please select at least one option';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit?.(formData);
    }
  };

  const partnerTypes = [
    'Agent', 'CA', 'Lawyer', 'Freelancer', 'Investor', 'Other'
  ];

  const dealingOptions = [
    'Commercial', 'Residential', 'Builder Floors'
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-center text-primary">{formTitle}</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="flex items-center text-sm font-medium text-primary mb-2">
            <FaUser className="mr-2" /> Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${errors.fullName ? 'border-error' : 'border-tertiary'} focus:ring-2 focus:ring-secondary focus:border-transparent`}
            placeholder="Enter your full name"
          />
          {errors.fullName && <p className="text-error text-sm mt-1">{errors.fullName}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label className="flex items-center text-sm font-medium text-primary mb-2">
            <FaPhone className="mr-2" /> Phone Number
          </label>
          <input
            type="tel"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${errors.phoneNo ? 'border-error' : 'border-tertiary'} focus:ring-2 focus:ring-secondary focus:border-transparent`}
            placeholder="Enter your phone number"
          />
          {errors.phoneNo && <p className="text-error text-sm mt-1">{errors.phoneNo}</p>}
        </div>

        {/* WhatsApp Number */}
        <div>
          <label className="flex items-center text-sm font-medium text-primary mb-2">
            <FaWhatsapp className="mr-2" /> WhatsApp Number
          </label>
          <input
            type="tel"
            name="whatsappNo"
            value={formData.whatsappNo}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-tertiary focus:ring-2 focus:ring-secondary focus:border-transparent"
            placeholder="Enter your WhatsApp number"
          />
        </div>

        {/* Email */}
        <div>
          <label className="flex items-center text-sm font-medium text-primary mb-2">
            <FaEnvelope className="mr-2" /> Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-error' : 'border-tertiary'} focus:ring-2 focus:ring-secondary focus:border-transparent`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-error text-sm mt-1">{errors.email}</p>}
        </div>

        {/* City */}
        <div>
          <label className="flex items-center text-sm font-medium text-primary mb-2">
            <FaMapMarkerAlt className="mr-2" /> City/Operating Area
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${errors.city ? 'border-error' : 'border-tertiary'} focus:ring-2 focus:ring-secondary focus:border-transparent`}
            placeholder="Enter your city"
          />
          {errors.city && <p className="text-error text-sm mt-1">{errors.city}</p>}
        </div>

        {/* Address */}
        <div>
          <label className="flex items-center text-sm font-medium text-primary mb-2">
            <FaBuilding className="mr-2" /> Complete Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-tertiary focus:ring-2 focus:ring-secondary focus:border-transparent"
            rows="3"
            placeholder="Enter your complete address"
          />
        </div>

        {/* Partner Type */}
        <div>
          <label className="flex items-center text-sm font-medium text-primary mb-2">
            <FaUserTie className="mr-2" /> Type of Partner
          </label>
          <select
            name="partnerType"
            value={formData.partnerType}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${errors.partnerType ? 'border-error' : 'border-tertiary'} focus:ring-2 focus:ring-secondary focus:border-transparent`}
          >
            <option value="">Select partner type</option>
            {partnerTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.partnerType && <p className="text-error text-sm mt-1">{errors.partnerType}</p>}
        </div>

        {/* Office Photos */}
        <div>
          <label className="flex items-center text-sm font-medium text-primary mb-2">
            <FaImage className="mr-2" /> Photos of Office
          </label>
          <input
            type="file"
            name="officePhotos"
            onChange={handleFileChange}
            multiple
            className="w-full px-4 py-2 rounded-lg border border-tertiary focus:ring-2 focus:ring-secondary focus:border-transparent"
            accept="image/*"
          />
        </div>

        {/* Dealing In */}
        <div>
          <label className="flex items-center text-sm font-medium text-primary mb-2">
            <FaHome className="mr-2" /> Dealing In
          </label>
          <div className="space-y-2">
            {dealingOptions.map(option => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.dealingIn.includes(option)}
                  onChange={() => handleDealingInChange(option)}
                  className="rounded text-secondary focus:ring-secondary"
                />
                <span className="text-primary">{option}</span>
              </label>
            ))}
          </div>
          {errors.dealingIn && <p className="text-error text-sm mt-1">{errors.dealingIn}</p>}
        </div>

        {/* Comments */}
        <div>
          <label className="flex items-center text-sm font-medium text-primary mb-2">
            <FaComments className="mr-2" /> Any Comments
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-tertiary focus:ring-2 focus:ring-secondary focus:border-transparent"
            rows="3"
            placeholder="Any additional comments"
          />
        </div>

        <Button variant="primary">
          Join Now
        </Button>
      </form>
    </div>
  );
};

export default PartnerForm; 