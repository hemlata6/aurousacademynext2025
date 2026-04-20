'use client';

import React, { useState, useEffect, Suspense } from 'react';
import {
    Box,
    Button,
    Grid,
    Typography,
    Dialog,
    Stack,
    FormControl,
    Select,
    MenuItem,
    TextField,
    InputAdornment,
    Fade,
    Slide,
    useMediaQuery
} from '@mui/material';
import {
    Close as CloseIcon,
    Person as PersonIcon,
    Phone as PhoneIcon,
    LocationOn as LocationOnIcon,
    School as SchoolIcon,
    Book as BookIcon
} from '@mui/icons-material';
import Network from '@/lib/Netwrok';
import ThankYouPage from './Thankyou';
import { useSearchParams } from 'next/navigation';
import instId from '@/constant/instId';

const ContactUsContent = ({ setApiResponse, selectedAction, handleClose }) => {

    const searchParams = useSearchParams();
    const queryParam = new URLSearchParams(searchParams?.toString() || '');
    const isMobile = useMediaQuery("(min-width:600px)");
    // const instId = 120;
    const campaignId = queryParam.get("campaignid");
    const metaCampaignId = queryParam.get("campaign_id");
    const mobile = useMediaQuery("(min-width:600px)");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [emailId, setEmailId] = useState("");
    const [message, setMessage] = useState("");
    const [course, setCourse] = useState("");
    const [typeSelect, setTypeSelect] = useState("course");
    const [coursesData, setCoursesData] = useState([]);
    const [error, setError] = useState("");
    const [address, setAddress] = useState('');
    const [openSyllabus, setOpenSyllabus] = useState(false);
    const [openSamplePaper, setOpenSamplePaper] = useState(false);
    const [openThankyou, setOpenThankyou] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState('');

    const handleSelectCourse = (e, item) => {
        setSelectedCourse(e.target.value)
    };

    const handleOpenThankyou = () => {
        setOpenThankyou(true);
        handleClose();
        setTimeout(() => {
            setOpenThankyou(false);
        }, 5000);
    };

    const handleCloseThankyou = () => {
        setOpenThankyou(false);
        handleClose();
    };

    const handleOpenSyllabus = () => {
        setOpenSyllabus(true);
    };
    const handleCloseSyllabus = () => {
        setOpenSyllabus(false);
        handleClose();
        handleCloseThankyou();
    };

    const handleOpenSamplePaperModal = () => {
        setOpenSamplePaper(true);
    };
    const handleCloseSamplePaperModal = () => {
        setOpenSamplePaper(false);
        handleClose();
        handleCloseThankyou();
    };


    useEffect(() => {
        getAllCourses();
    }, []);

    useEffect(() => {
        if (typeSelect === "course") {
            getAllCourses();
        } else if (typeSelect === "testSeries") {
            getTestSeries();
        }

    }, [typeSelect]);

    const handleChangeCourse = (e) => {
        setCourse(e.target.value)
    }

    const getAllCourses = async () => {
        try {
            const response = await Network.fetchCourses(instId.instId);
            let templist = response.courses.filter(course =>
                course.active === true &&
                course.tags && course.tags.some(tag => tag.tag === "Enquiry From Course")
            );
            setCoursesData(templist);
        } catch (error) {
            console.log(error);
        }
    };
    const getTestSeries = async () => {
        try {
            const response = await Network.fetchTestSeries(instId.instId);
            let templist = [];
            response.testSeriesList.forEach((course) => {
                if (course.active == true) {
                    templist.push(course);
                }
            })
            setCoursesData(response?.testSeriesList);
        } catch (error) {
            console.log(error);
        }
    };

    // console.log('Data', firstName, lastName, number, emailId, typeSelect, course, message)

    const handleSubmit = async () => {
        if (firstName && number && course && message) {
            const body = {
                "firstName": firstName,
                "lastName": "",
                "email": emailId ? emailId : '',
                "contact": number,
                "enquiryType": "course",
                "contentId": Number(course),
                "instId": instId.instId,
                "domain": selectedCourse,
                "campaignId": campaignId ? campaignId : metaCampaignId ? metaCampaignId : null
            }
            const response = await Network.submitForm(body);
            if (response?.errorCode === 0) {
                setFirstName("");
                setLastName("");
                setNumber(""); ``
                setEmailId("");
                setTypeSelect("");
                setCourse("");
                setMessage("");
                setError("");
                setSelectedCourse('');
                handleOpenThankyou();
                // setTimeout(() => {
                //     if (selectedAction === 'samplePaper') {
                //         handleOpenSamplePaperModal();
                //     } else if (selectedAction === 'syllabus') {
                //         handleOpenSyllabus();
                //     };
                // }, 3000);
                // handleClose();
            }
        }
        else {
            setError("All fields Are required");
        }
    };

    // console.log('coursesData', coursesData);


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', zIndex: 2, p: 3 }}>
            {/* Form Title */}
            <Box sx={{ marginBottom: '0.5rem' }}>
                <Typography
                    sx={{
                        pt: 1,
                        fontSize: { xs: '1.5rem', md: '1.75rem' },
                        fontWeight: '700',
                        color: '#1e293b',
                        marginBottom: '0.3rem',
                        letterSpacing: '-0.5px',
                    }}
                >
                    Book Your Free Session
                </Typography>
                <Typography
                    sx={{
                        fontSize: { xs: '0.85rem', md: '0.95rem' },
                        color: '#64748b',
                        fontWeight: '400',
                        lineHeight: 1.5,
                    }}
                >
                    Fill the form below to get a callback from our mentors.
                </Typography>
            </Box>
            {/* Student Name */}
            <TextField
                fullWidth
                label="Student Name"
                placeholder="Enter your name"
                size="medium"
                variant="outlined"
                sx={{
                    '& .MuiOutlinedInput-root': {
                        background: '#f8fafc',
                        color: '#1e293b',
                        borderRadius: '8px',
                        '& fieldset': {
                            borderColor: '#e2e8f0',
                            borderWidth: '1px',
                        },
                        '&:hover fieldset': {
                            borderColor: '#cbd5e1',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#3b82f6',
                            borderWidth: '2px',
                        }
                    },
                    '& .MuiInputLabel-root': {
                        color: '#64748b',
                        fontSize: '0.95rem',
                        '&.Mui-focused': {
                            color: '#3b82f6',
                        },
                    },
                    '& .MuiOutlinedInput-input': {
                        fontSize: '0.95rem',
                        '&::placeholder': {
                            color: '#94a3b8',
                            opacity: 1,
                        }
                    }
                }}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />

            {/* Mobile Number */}
            <TextField
                fullWidth
                label="Mobile Number"
                placeholder="Enter mobile number"
                size="medium"
                variant="outlined"
                type="tel"
                autoComplete="off"
                sx={{
                    '& .MuiOutlinedInput-root': {
                        background: '#f8fafc',
                        color: '#1e293b',
                        borderRadius: '8px',
                        '& fieldset': {
                            borderColor: '#e2e8f0',
                            borderWidth: '1px',
                        },
                        '&:hover fieldset': {
                            borderColor: '#cbd5e1',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#3b82f6',
                            borderWidth: '2px',
                        }
                    },
                    '& .MuiInputLabel-root': {
                        color: '#64748b',
                        fontSize: '0.95rem',
                        '&.Mui-focused': {
                            color: '#3b82f6',
                        },
                    },
                    '& .MuiOutlinedInput-input': {
                        fontSize: '0.95rem',
                        '&::placeholder': {
                            color: '#94a3b8',
                            opacity: 1,
                        }
                    }
                }}
                value={number === '0' || !number ? '' : number}
                onChange={(e) => setNumber(e.target.value)}
            />

            {/* Course Select */}
            <FormControl fullWidth size="medium">
                <Select
                    value={course}
                    onChange={handleChangeCourse}
                    displayEmpty
                    sx={{
                        background: '#f8fafc',
                        color: '#1e293b',
                        borderRadius: '8px',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#e2e8f0',
                            borderWidth: '1px',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#cbd5e1',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#3b82f6',
                            borderWidth: '2px',
                        },
                        '& .MuiSelect-select': {
                            color: '#1e293b',
                        }
                    }}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                background: '#ffffff',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                '& .MuiMenuItem-root': {
                                    color: '#1e293b',
                                    fontSize: '0.95rem',
                                    '&:hover': {
                                        background: '#f1f5f9',
                                    },
                                    '&.Mui-selected': {
                                        background: '#e0f2fe',
                                        color: '#3b82f6',
                                        '&:hover': {
                                            background: '#bae6fd',
                                        }
                                    }
                                }
                            }
                        }
                    }}
                >
                    <MenuItem value="" disabled>
                        <span style={{ color: '#3b82f6' }}>Select Course</span>
                    </MenuItem>
                    {coursesData && coursesData.map((item) => (
                        <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Message */}
            <TextField
                fullWidth
                label="Any Questions? (Optional)"
                placeholder="Tell us about your inquiry..."
                multiline
                rows={2}
                size="medium"
                variant="outlined"
                sx={{
                    '& .MuiOutlinedInput-root': {
                        background: '#f8fafc',
                        color: '#1e293b',
                        borderRadius: '8px',
                        '& fieldset': {
                            borderColor: '#e2e8f0',
                            borderWidth: '1px',
                        },
                        '&:hover fieldset': {
                            borderColor: '#cbd5e1',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#3b82f6',
                            borderWidth: '2px',
                        }
                    },
                    '& .MuiInputLabel-root': {
                        color: '#64748b',
                        fontSize: '0.95rem',
                        '&.Mui-focused': {
                            color: '#3b82f6',
                        },
                    },
                    '& .MuiOutlinedInput-input': {
                        fontSize: '0.95rem',
                        '&::placeholder': {
                            color: '#94a3b8',
                            opacity: 1,
                        }
                    }
                }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            {/* Submit Button */}
            <Button
                fullWidth
                variant="contained"
                sx={{
                    mb: 1,
                    background: '#3b82f6',
                    color: '#ffffff',
                    fontWeight: '700',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    textTransform: 'uppercase',
                    fontSize: '0.95rem',
                    letterSpacing: '0.5px',
                    marginTop: '1rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                    '&:hover': {
                        background: '#2563eb',
                        boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)',
                        transform: 'translateY(-2px)',
                    },
                    '&:active': {
                        transform: 'translateY(0)',
                    }
                }}
                onClick={handleSubmit}
            >
                GET STARTED →
            </Button>

            {/* Thank You Dialog */}
            <Dialog
                open={openThankyou}
                onClose={handleCloseThankyou}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "500px",
                            borderRadius: "20px",
                            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                        },
                    },
                }}
            >
                <Stack direction={'row'} spacing={2} display={'flex'} justifyContent={'flex-end'} alignItems={'center'} p={2}>
                    <CloseIcon
                        sx={{
                            cursor: "pointer",
                            color: '#667eea',
                            fontSize: '24px',
                            '&:hover': {
                                color: '#764ba2',
                                transform: 'rotate(90deg) scale(1.1)'
                            },
                            transition: 'all 0.3s ease'
                        }}
                        onClick={handleCloseThankyou}
                    />
                </Stack>
                <Stack direction={'column'} spacing={2} p={4} pt={2}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '3rem', mb: 1 }}>🎉</Typography>
                        <Typography
                            sx={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                mb: 1
                            }}
                        >
                            Thank You!
                        </Typography>
                        <Typography sx={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.6 }}>
                            We're excited to connect with you! Our team will reach out soon to guide you on your success journey.
                        </Typography>
                    </Box>
                </Stack>
            </Dialog>
        </Box>
    );
}

// Fallback component for Suspense
const ContactUsFallback = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
        <Typography>Loading...</Typography>
    </Box>
);

// Wrapper component with Suspense boundary
const ContactUs = (props) => (
    <Suspense fallback={<ContactUsFallback />}>
        <ContactUsContent {...props} />
    </Suspense>
);

export default ContactUs;


