`export default function Component() {`
'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export default function Component() {
  const [text, setText] = useState("Glitch Me!")
  const [glitchIntensity, setGlitchIntensity] = useState(5)
  const [glitchedText, setGlitchedText] = useState("")

  const glitchCharacters = "!@#$%^&*()_+-=[]{}|;:,.<>?"

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      let newText = text.split('').map(char => {
        if (Math.random() < glitchIntensity / 100) {
          return glitchCharacters[Math.floor(Math.random() * glitchCharacters.length)]
        }
        return char
      }).join('')
      setGlitchedText(newText)
    }, 100)

    return () => clearInterval(glitchInterval)
  }, [text, glitchIntensity])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <h1 className="text-4xl font-bold mb-8 glitch-title" data-text="Glitch Text Generator">
        Glitch Text Generator
      </h1>
      <div className="w-full max-w-md space-y-4">
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to glitch"
          className="bg-gray-800 text-white border-gray-700"
        />
        <div className="flex items-center space-x-4">
          <span className="w-24">Intensity:</span>
          <Slider
            value={[glitchIntensity]}
            onValueChange={(value) => setGlitchIntensity(value[0])}
            max={50}
            step={1}
            className="flex-grow"
          />
          <span className="w-8 text-right">{glitchIntensity}%</span>
        </div>
        <div className="glitch-text text-2xl font-bold text-center p-4 bg-gray-800 rounded">
          {glitchedText}
        </div>
      </div>
      <style jsx>{`
        @keyframes glitch {
          0% {
            transform: translate(0)
          }
          20% {
            transform: translate(-5px, 5px)
          }
          40% {
            transform: translate(-5px, -5px)
          }
          60% {
            transform: translate(5px, 5px)
          }
          80% {
            transform: translate(5px, -5px)
          }
          to {
            transform: translate(0)
          }
        }
        .glitch-title {
          position: relative;
          animation: glitch 1s infinite;
        }
        .glitch-title::before,
        .glitch-title::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .glitch-title::before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        .glitch-title::after {
          left: -2px;
          text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
          animation: glitch-anim2 1s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% {
            clip: rect(10px, 9999px, 31px, 0);
            transform: skew(0.6deg);
          }
          5% {
            clip: rect(70px, 9999px, 71px, 0);
            transform: skew(0.84deg);
          }
          10% {
            clip: rect(74px, 9999px, 86px, 0);
            transform: skew(0.49deg);
          }
          15% {
            clip: rect(89px, 9999px, 100px, 0);
            transform: skew(0.05deg);
          }
          20% {
            clip: rect(20px, 9999px, 26px, 0);
            transform: skew(0.89deg);
          }
          25% {
            clip: rect(49px, 9999px, 54px, 0);
            transform: skew(0.34deg);
          }
          30% {
            clip: rect(24px, 9999px, 30px, 0);
            transform: skew(0.64deg);
          }
          35% {
            clip: rect(20px, 9999px, 25px, 0);
            transform: skew(0.43deg);
          }
          40% {
            clip: rect(67px, 9999px, 72px, 0);
            transform: skew(0.2deg);
          }
          45% {
            clip: rect(30px, 9999px, 41px, 0);
            transform: skew(0.21deg);
          }
          50% {
            clip: rect(88px, 9999px, 99px, 0);
            transform: skew(0.05deg);
          }
          55% {
            clip: rect(31px, 9999px, 37px, 0);
            transform: skew(0.82deg);
          }
          60% {
            clip: rect(10px, 9999px, 17px, 0);
            transform: skew(0.54deg);
          }
          65% {
            clip: rect(82px, 9999px, 94px, 0);
            transform: skew(0.49deg);
          }
          70% {
            clip: rect(33px, 9999px, 35px, 0);
            transform: skew(0.7deg);
          }
          75% {
            clip: rect(3px, 9999px, 13px, 0);
            transform: skew(0.6deg);
          }
          80% {
            clip: rect(39px, 9999px, 50px, 0);
            transform: skew(0.99deg);
          }
          85% {
            clip: rect(72px, 9999px, 81px, 0);
            transform: skew(0.64deg);
          }
          90% {
            clip: rect(20px, 9999px, 28px, 0);
            transform: skew(0.39deg);
          }
          95% {
            clip: rect(3px, 9999px, 13px, 0);
            transform: skew(0.6deg);
          }
          100% {
            clip: rect(53px, 9999px, 59px, 0);
            transform: skew(0.31deg);
          }
        }
        @keyframes glitch-anim2 {
          0% {
            clip: rect(65px, 9999px, 76px, 0);
            transform: skew(0.65deg);
          }
          5% {
            clip: rect(15px, 9999px, 26px, 0);
            transform: skew(0.89deg);
          }
          10% {
            clip: rect(36px, 9999px, 47px, 0);
            transform: skew(0.3deg);
          }
          15% {
            clip: rect(51px, 9999px, 62px, 0);
            transform: skew(0.52deg);
          }
          20% {
            clip: rect(98px, 9999px, 109px, 0);
            transform: skew(0.96deg);
          }
          25% {
            clip: rect(8px, 9999px, 19px, 0);
            transform: skew(0.38deg);
          }
          30% {
            clip: rect(53px, 9999px, 64px, 0);
            transform: skew(0.13deg);
          }
          35% {
            clip: rect(72px, 9999px, 83px, 0);
            transform: skew(0.71deg);
          }
          40% {
            clip: rect(53px, 9999px, 64px, 0);
            transform: skew(0.63deg);
          }
          45% {
            clip: rect(45px, 9999px, 56px, 0);
            transform: skew(0.23deg);
          }
          50% {
            clip: rect(66px, 9999px, 77px, 0);
            transform: skew(0.95deg);
          }
          55% {
            clip: rect(11px, 9999px, 22px, 0);
            transform: skew(0.58deg);
          }
          60% {
            clip: rect(12px, 9999px, 23px, 0);
            transform: skew(0.87deg);
          }
          65% {
            clip: rect(6px, 9999px, 17px, 0);
            transform: skew(0.99deg);
          }
          70% {
            clip: rect(65px, 9999px, 76px, 0);
            transform: skew(0.11deg);
          }
          75% {
            clip: rect(84px, 9999px, 95px, 0);
            transform: skew(0.83deg);
          }
          80% {
            clip: rect(88px, 9999px, 99px, 0);
            transform: skew(0.26deg);
          }
          85% {
            clip: rect(11px, 9999px, 22px, 0);
            transform: skew(0.55deg);
          }
          90% {
            clip: rect(56px, 9999px, 67px, 0);
            transform: skew(0.37deg);
          }
          95% {
            clip: rect(29px, 9999px, 40px, 0);
            transform: skew(0.89deg);
          }
          100% {
            clip: rect(7px, 9999px, 18px, 0);
            transform: skew(0.43deg);
          }
        }
        .glitch-text {
          position: relative;
          animation: glitch 0.5s infinite;
          text-shadow: 2px 2px #ff00c1, -2px -2px #00fff9;
        }
      `}</style>
    </div>
  )
}
