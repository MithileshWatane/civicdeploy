import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="loading-container" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      width: '100vw',
      backgroundColor: '#f5f8ff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div className="logo-animation" style={{
        position: 'relative',
        marginBottom: '3rem',
        textAlign: 'center'
      }}>
        {/* The colorful circles behind the text */}
        <div className="circles" style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '0',
          left: '0',
          zIndex: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'rgba(65, 105, 225, 0.2)',
            animation: 'circle1 3s ease-in-out infinite',
            transform: 'translateX(-20px)'
          }}></div>
          <div style={{
            position: 'absolute',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'rgba(30, 144, 255, 0.15)',
            animation: 'circle2 3s ease-in-out infinite',
            animationDelay: '0.2s',
            transform: 'translateX(30px)'
          }}></div>
        </div>
        
        {/* The main text animation */}
        <h1 style={{ 
          position: 'relative',
          fontSize: '3rem', 
          fontWeight: 'bold',
          margin: '0',
          padding: '20px 0',
          zIndex: '1'
        }}>
          <span className="first-word" style={{
            color: '#333',
            position: 'relative',
            display: 'inline-block',
            animation: 'slideInLeft 1.5s ease forwards'
          }}>Civic</span>
          <span className="second-word" style={{
            color: 'blue',
            position: 'relative',
            display: 'inline-block',
            animation: 'slideInRight 1.5s ease forwards'
          }}>Connect</span>
        </h1>
      </div>
      
      {/* Loading bar */}
      <div className="loading-bar-container" style={{
        width: '250px',
        height: '10px',
        backgroundColor: '#e0e0e0',
        borderRadius: '5px',
        overflow: 'hidden',
        marginBottom: '1.5rem'
      }}>
        <div className="loading-bar" style={{
          height: '100%',
          width: '30%',
          backgroundColor: 'blue',
          borderRadius: '5px',
          animation: 'loadingBar 2s ease-in-out infinite'
        }}></div>
      </div>
      
      <p className="loading-text" style={{ 
        fontSize: '1.2rem', 
        color: '#555',
        letterSpacing: '1px',
        animation: 'fadeInOut 2s ease-in-out infinite'
      }}>
        Transferring data...
      </p>
      
      <style jsx>{`
        @keyframes slideInLeft {
          0% { transform: translateX(-50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
          0% { transform: translateX(50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes loadingBar {
          0% { width: 0%; transform: translateX(0); }
          50% { width: 30%; }
          100% { width: 0%; transform: translateX(250px); }
        }
        
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        @keyframes circle1 {
          0%, 100% { transform: scale(1) translateX(-20px); }
          50% { transform: scale(1.3) translateX(-15px); }
        }
        
        @keyframes circle2 {
          0%, 100% { transform: scale(1) translateX(30px); }
          50% { transform: scale(1.2) translateX(25px); }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;