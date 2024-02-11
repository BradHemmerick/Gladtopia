import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const mentalHealthChallenges = [
    { id: 1, challenge: "Write down three things you're grateful for today." },
    { id: 2, challenge: "Spend 5 minutes practicing deep breathing in a quiet space." },
    { id: 3, challenge: "Dedicate an hour to being offline. No phones, computers, or TVs." },
    { id: 4, challenge: "Take a 30-minute walk outside, paying attention to the sights and sounds." },
    { id: 5, challenge: "Do something kind for a friend or stranger without expecting anything in return." },
    { id: 6, challenge: "Write a letter to your future self, outlining your hopes and dreams." },
    { id: 7, challenge: "Prepare a nutritious meal that includes vegetables, fruits, and whole grains." },
    { id: 8, challenge: "Spend time drawing, painting, or engaging in any creative activity you enjoy." },
    { id: 9, challenge: "Engage in 30 minutes of physical activity that makes you feel good." },
    { id: 10, challenge: "Read a book or an article for pleasure, without any distractions around." },
    { id: 11, challenge: "Find a guided visualization exercise online and follow it to relax and refocus." },
    { id: 12, challenge: "Watch a funny video or show that will make you laugh." },
    { id: 13, challenge: "Spend 15 minutes writing a poem, short story, or journal entry." },
    { id: 14, challenge: "Find a natural object like a flower or plant and focus on it for 5 minutes." },
    { id: 15, challenge: "Choose one area in your home to organize and de-clutter." },
    { id: 16, challenge: "Have a meal or snack without any screens, focusing on the taste and experience of eating." },
    { id: 17, challenge: "Listen to calming music and focus on the melody for 10 minutes to clear your mind." },
    { id: 18, challenge: "Spend time drawing, painting, or engaging in any creative activity you enjoy." },
    { id: 19, challenge: "Engage in 30 minutes of physical activity that makes you feel good." },
    { id: 20, challenge: "Read a book or an article for pleasure, without any distractions around." },
    { id: 21, challenge: "Say three positive affirmations about yourself." },
    { id: 22, challenge: "Try a 10-minute guided meditation focusing on peace and relaxation." },
    { id: 23, challenge: "Set a small, achievable goal for the week and outline steps to accomplish it." },
    { id: 24, challenge: "Create a playlist of songs that uplift your mood and listen to it." },
    { id: 25, challenge: "Spend 30 minutes learning something new that interests you." },
    { id: 26, challenge: "Spend some time creating a vision board that represents your goals, dreams, and aspirations, using images, words, and symbols to visualize your ideal future." },
    { id: 27, challenge: "Sing along to your favorite song." }
];

const DailyChallenge = () => {
    const { theme } = useTheme();
    const lightModeButtonStyle = {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#f0f0f0',
        color: '#333',
        border: '1px solid #ddd',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease'
    };

    const darkModeButtonStyle = {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#333',
        color: 'gold',
        border: '1px solid gold',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
    };

    const buttonStyle = theme === 'dark' ? darkModeButtonStyle : lightModeButtonStyle;


    const [todayChallenge, setTodayChallenge] = useState('');

    useEffect(() => {
        const storedChallenge = localStorage.getItem('dailyChallenge');

        if (storedChallenge) {
            setTodayChallenge(storedChallenge);
        } else {
            const getTodaysChallenge = () => {
                const startOfYear = new Date(new Date().getFullYear(), 0, 0);
                const diff = new Date() - startOfYear;
                const oneDay = 1000 * 60 * 60 * 24;
                const dayOfYear = Math.floor(diff / oneDay);

                // Use dayOfYear to select a challenge
                const challengeIndex = dayOfYear % mentalHealthChallenges.length;
                const selectedChallenge = mentalHealthChallenges[challengeIndex].challenge;
                setTodayChallenge(selectedChallenge);
                localStorage.setItem('dailyChallenge', selectedChallenge); // Save to local storage
            };

            getTodaysChallenge();
        }
    }, []);

    const generateNewChallenge = () => {
        const randomIndex = Math.floor(Math.random() * mentalHealthChallenges.length);
        const newChallenge = mentalHealthChallenges[randomIndex].challenge;
        setTodayChallenge(newChallenge);
        localStorage.setItem('dailyChallenge', newChallenge); // Save to local storage
    };

    return (
        <div>
            <h2>Daily Mental Health Challenge</h2>
            <p>{todayChallenge}</p>
            <button onClick={generateNewChallenge} style={buttonStyle}>
                Get New Challenge
            </button>
        </div>
    );
};

export default DailyChallenge;
