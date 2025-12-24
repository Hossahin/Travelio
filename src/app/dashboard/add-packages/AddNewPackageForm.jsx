"use client"
import React from 'react';
import { MapPin } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import SubmitButton from './components/SubmitButton';
import TermsAndCondition from './components/TermsAndCondition';
import PackageImage from './components/PackageImage';
import ContactInfo from './components/ContactInfo';
import PickupOrDropoff from './components/PickupOrDropoff';
import Inclusions from './components/InclusiosAndExclusions/Inclusions';
import Exclusions from './components/InclusiosAndExclusions/Exclusions';
import Itinerary from './components/Itinerary';
import Highlights from './components/Highlights';
import Description from './components/Description';
import Dates from './components/Dates';
import PackageName from './components/BasicInformation/PackageName';
import Destination from './components/BasicInformation/Destination';
import Duration from './components/BasicInformation/Duration';
import Price from './components/BasicInformation/Price';
import GroupSize from './components/BasicInformation/GroupSize';
import Difficulty from './components/BasicInformation/Difficulty';
import PackageType from './components/BasicInformation/PackageType';
import AvailableSlots from './components/BasicInformation/AvailableSlots';
import { createPackage } from '@/app/actions/addTravelPackageAction';

const AddNewPackageForm = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [images, setImages] = useState([]);

    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors, isSubmitting },
        setValue,
        reset
    } = useForm({
        defaultValues: {
            packageName: '',
            destination: '',
            duration: '',
            price: '',
            groupSize: '',
            difficulty: 'easy',
            packageType: 'adventure',
            description: '',
            highlights: [''],
            itinerary: [{ day: 1, title: '', description: '' }],
            inclusions: [''],
            exclusions: [''],
            pickupLocation: '',
            dropoffLocation: '',
            startDate: '',
            endDate: '',
            availableSlots: '',
            contactEmail: '',
            contactPhone: '',
            termsAccepted: false
        }
    });

    //submit functionality
    const onSubmit = async (data) => {
        console.log('Package Data:', data);
        try {
            const result = await createPackage(data);
            console.log(result)
            if (!result.success) throw new Error(result.error);

            Swal.fire({
                title: "Package added successfully!",
                icon: 'success'
            });
            reset();
            setImagePreview(null);
        } catch (error) {
            console.error("Error adding package:", error);
            Swal.fire({
                title: "Error adding package. Please try again.",
                icon: 'error'
            });
        }
    };
    return (
        <form className="space-y-8">
            {/* Basic Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <MapPin className="mr-2" size={20} />
                    Basic Information
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <PackageName register={register} errors={errors}></PackageName>

                    <Destination register={register} errors={errors}></Destination>

                    <Duration register={register} errors={errors}></Duration>

                    <Price register={register} errors={errors}></Price>

                    <GroupSize register={register} errors={errors}></GroupSize>

                    <Difficulty register={register}></Difficulty>

                    <PackageType register={register}></PackageType>

                    <AvailableSlots register={register} errors={errors}></AvailableSlots>
                </div>
            </div>

            {/* Dates */}
            <Dates register={register} errors={errors}></Dates>

            {/* Description */}
            <Description register={register} errors={errors}></Description>

            {/* Highlights */}
            <Highlights control={control} register={register}></Highlights>

            {/* Itinerary */}
            <Itinerary control={control} register={register}></Itinerary>

            {/* Inclusions & Exclusions */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Inclusions */}
                <Inclusions control={control} register={register}></Inclusions>

                {/* Exclusions */}
                <Exclusions control={control} register={register}></Exclusions>
            </div>

            {/* Pickup/Dropoff */}
            <PickupOrDropoff register={register} errors={errors}></PickupOrDropoff>

            {/* Contact Information */}
            <ContactInfo register={register} errors={errors}></ContactInfo>

            {/* Package Image */}
            <PackageImage imagePreview={imagePreview} setImagePreview={setImagePreview}></PackageImage>

            {/* Terms and Conditions */}
            <TermsAndCondition register={register} errors={errors}></TermsAndCondition>

            {/* Submit Button */}
            <SubmitButton handleSubmit={handleSubmit} onSubmit={onSubmit} isSubmitting={isSubmitting}></SubmitButton>
        </form>
    );
};

export default AddNewPackageForm;