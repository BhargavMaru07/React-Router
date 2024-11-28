import React from 'react'

export default function About() {
    return (
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                React development is carried out by passionate developers
              </h2>
              <p className="mt-6 text-gray-600">
                React development thrives on the passion and creativity of
                dedicated developers worldwide. These individuals constantly
                push boundaries, crafting seamless user interfaces and
                innovative web applications. Their commitment to continuous
                learning, coupled with a collaborative spirit, drives the
                evolution of React's ecosystem. This passion ensures robust,
                scalable solutions that elevate user experiences, making React a
                cornerstone of modern web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}