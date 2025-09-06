import config from '@/lib/config'
import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export function Footer() {
  return (<>
    <footer className="border-t border-border p-6 mt-12">
      <section className="max-w-4xl mx-auto space-y-6">
        <div>
          <div className="flex space-x-4">
            <a href={`mailto:${config.profile.email}`} className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
              <FaEnvelope size={24} />
            </a>
            <span className="text-lg">{config.profile.email}</span>
          </div>

          <div className="flex items-center space-x-4">
            <a href={config.profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <span className="text-lg">{`avinashpokhrel`}</span>
          </div>

          <div className="flex items-center space-x-4">
            <a href={config.profile.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
              <FaGithub size={24} />
            </a>
            <span className="text-lg">{`xetri`}</span>
          </div>
        </div>
      </section>
    </footer>
  </>)
}

export default Footer