import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Game Overview */}
      <section className="flex flex-col md:flex-row gap-8 mb-16 items-center">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            What is TrHunt?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            TrHunt is an interactive programming puzzle game that challenges players
            to solve coding mysteries through a series of increasingly complex challenges.
            Combine logical thinking with programming skills to unlock clues and progress
            through the game's narrative.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="/images/game-screenshot.png" alt="Game preview" 
               className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow" />
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Daily Challenges</h3>
            <p className="text-gray-600">New puzzles released every day with varying difficulty levels</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Leaderboards</h3>
            <p className="text-gray-600">Compete with players worldwide and track your progress</p>
          </div>
          
        </div>
      </section>

      {/* How to Play */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">How to Play</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="relative pl-24">
            <div className="absolute left-0 top-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">1</div>
            <h4 className="text-xl font-semibold mb-2">Solve Coding Puzzles</h4>
            <p className="text-gray-600">Use your programming knowledge to solve interactive challenges</p>
          </div>
          <div className="relative pl-24">
            <div className="absolute left-0 top-0 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">2</div>
            <h4 className="text-xl font-semibold mb-2">Earn Clues</h4>
            <p className="text-gray-600">Collect clues by completing puzzles to unlock new levels</p>
          </div>
          <div className="relative pl-24">
            <div className="absolute left-0 top-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">3</div>
            <h4 className="text-xl font-semibold mb-2">Progress Through Story</h4>
            <p className="text-gray-600">Unravel an engaging narrative as you advance</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img src="/images/developer1.jpg" alt="Developer" 
                 className="w-32 h-32 rounded-full object-cover mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Aayush Khadka & Sandesh Khadka</h4>
            <p className="text-gray-600">Lead Developer</p>
          </div>
          <div className="text-center">
            <img src="/images/developer2.jpg" alt="Developer" 
                 className="w-32 h-32 rounded-full object-cover mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Aayush Khadka</h4>
            <p className="text-gray-600">Game Designer</p>
          </div>
          <div className="text-center">
            <img src="/images/developer3.jpg" alt="Developer" 
                 className="w-32 h-32 rounded-full object-cover mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Sandesh Khadka</h4>
            <p className="text-gray-600">Puzzle Architect</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;