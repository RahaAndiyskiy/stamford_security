"use client"

import { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/ui/Container'

export default function GdprStorySection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const [progress, setProgress] = useState(0)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    const updateSizes = () => {
      setContentHeight(content.offsetHeight)
    }

    const updateProgress = () => {
      const headerOffset = 70
      const sectionTop = section.offsetTop - headerOffset
      const scrollable = section.offsetHeight - window.innerHeight
      const rawProgress = (window.scrollY - sectionTop) / scrollable
      const clamped = Math.min(1, Math.max(0, rawProgress))
      setProgress(clamped)
    }

    updateSizes()
    updateProgress()

    const handleScroll = () => {
      if (rafRef.current !== null) return
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null
        updateProgress()
      })
    }

    const handleResize = () => {
      updateSizes()
      updateProgress()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const innerHeight = typeof window !== 'undefined' ? window.innerHeight : 0
  const maxShift = Math.max(0, contentHeight - innerHeight + 80)
  const translateY = -Math.min(maxShift, progress * maxShift)
  const opacity = progress < 0.92 ? 1 : Math.max(0, 1 - (progress - 0.92) / 0.08)

  return (
    <section ref={sectionRef} className="relative h-[380vh] bg-[#EEEDEB] text-[#0E151D]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <Container className="relative h-full">
          <div className="absolute left-1/2 top-0 h-full w-full max-w-3xl -translate-x-1/2 overflow-visible px-4 sm:px-0">
            <span className="about-bg-number pointer-events-none select-none">GDPR</span>
            <div
              ref={contentRef}
              className="relative mx-auto mt-[10rem] pt-[7rem] text-left overflow-visible sm:mt-[12rem] sm:pt-[8rem]"
              style={{
                transform: `translateY(${translateY}px)`,
                opacity,
              }}
            >
              <div className="mb-12 text-center">
                <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#0E151D]/70">
                  IT Security Policy
                </p>
                <h1 className="mb-3 text-4xl font-semibold leading-tight text-[#0E151D] sm:text-5xl">
                  Stamford Security Services Limited
                </h1>
                <p className="text-xl font-semibold text-[#0E151D]">December 2020</p>
              </div>

              <div className="space-y-10 text-base leading-8 sm:text-lg">
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#0E151D] text-center">Introduction</h2>
                  <p>
                    This document sets out the measures to be taken by all employees of Stamford Security Services Limited (the “Company”) and by the Company as a whole in order to protect the Company’s computer systems, devices, infrastructure, computing environment and any and all other relevant equipment (collectively, “IT Systems”) from damage and threats whether internal, external, deliberate or accidental.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#0E151D] text-center">Key Principles</h2>
                  <p>All IT Systems are to be protected against unauthorised access.</p>
                  <p>All IT Systems are to be used only in compliance with relevant Company Policies.</p>
                  <p>All data stored on IT Systems are to be managed securely in compliance with all relevant parts of the General Data Protection Regulation and all other laws governing data protection whether now or in the future in force.</p>
                  <p>All employees of the Company and any and all third parties authorised to use the IT Systems including, but not limited to, contractors and sub-contractors (collectively, “Users”), must ensure that they are familiar with this Policy and must adhere to and comply with it at all times.</p>
                  <p>All line managers must ensure that all Users under their control and direction must adhere to and comply with this Policy at all times as required under paragraph 2.4.</p>
                  <p>All IT Systems are to be installed, maintained, serviced, repaired and upgraded by Kamil Khakimov (the “IT Department”) or by such third party/parties as the IT Department may from time to time authorise.</p>
                  <p>The responsibility for the security and integrity of all IT Systems and the data stored thereon (including, but not limited to, the security, integrity and confidentiality of that data) lies with the IT Department unless expressly stated otherwise.</p>
                  <p>All breaches of security pertaining to the IT Systems or any data stored thereon shall be reported and subsequently investigated by the IT Department.</p>
                  <p>All Users must report any and all security concerns relating to the IT Systems or to the data stored thereon immediately to the IT Department.</p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#0E151D] text-center">IT Department Responsibilities</h2>
                  <p>The IT Manager, Kamil Khakimov, shall be responsible for the following:</p>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>ensuring that all IT Systems are assessed and deemed suitable for compliance with the Company’s security requirements;</li>
                    <li>ensuring that IT security standards within the Company are effectively implemented and regularly reviewed; and</li>
                    <li>ensuring that all Users are kept aware of the requirements of this Policy and of all related legislation, regulations and other relevant rules whether now or in the future in force including, but not limited to, the General Data Protection Regulation and the Computer Misuse Act 1990.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <p>The IT Staff shall be responsible for the following:</p>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>assisting all Users in understanding and complying with this Policy;</li>
                    <li>providing all Users with appropriate support and training in IT security matters and use of IT Systems;</li>
                    <li>ensuring that all Users are granted levels of access to IT Systems that are appropriate for each User, taking into account their job role, responsibilities and any special security requirements;</li>
                    <li>receiving and handling all reports relating to IT security matters and taking appropriate action in response;</li>
                    <li>taking proactive action, where possible, to establish and implement IT security procedures and raise User awareness;</li>
                    <li>assisting the IT Manager in monitoring all IT security within the Company and taking all necessary action to implement this Policy and any changes made to this Policy in the future; and</li>
                    <li>ensuring that regular backups are taken of all data stored within the IT Systems at intervals no less than once a week and that such backups are stored at a suitable location of the Company premises.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#0E151D] text-center">Users’ Responsibilities</h2>
                  <p>All Users must comply with all relevant parts of this Policy at all times when using the IT Systems.</p>
                  <p>All Users must use the IT Systems only within the bounds of UK law and must not use the IT Systems for any purpose or activity which is likely to contravene any UK law whether now or in the future in force.</p>
                  <p>Users must immediately inform the IT Department of any and all security concerns relating to the IT Systems.</p>
                  <p>Users must immediately inform the IT Department of any other technical problems (including, but not limited to, hardware failures and software errors) which may occur on the IT Systems.</p>
                  <p>Any and all deliberate or negligent breaches of this Policy by Users will be handled as appropriate under the Company’s disciplinary procedures.</p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#0E151D] text-center">Software Security Measures</h2>
                  <p>All software in use on the IT Systems (including, but not limited to, operating systems and individual software applications) will be kept up-to-date and any and all relevant software updates, patches, fixes and other intermediate releases will be applied at the sole discretion of the IT Department. This provision does not extend to upgrading software to new ‘major releases’ (e.g. from version 1.0 to version 2.0), only to updates within a particular major release (e.g. from version 1.0 to version 1.0.1 etc.). Unless a software update is available free of charge it will be classed as a major release and thus falls within the remit of new software procurement and outside the scope of this provision.</p>
                  <p>Where any security flaw is identified in any software that flaw will be either fixed immediately or the software may be withdrawn from the IT Systems until such time as the security flaw can be effectively remedied.</p>
                  <p>No Users may install any software of their own, whether that software is supplied on physical media (e.g. DVD-Rom) or whether it is downloaded, without the approval of the IT Manager. Any software belonging to Users must be approved by the IT Manager and may only be installed where that installation poses no security risk to the IT Systems and where the installation would not breach any licence agreements to which that software may be subject.</p>
                  <p>All software will be installed onto the IT Systems by the IT Department unless an individual User is given written permission to do so by the IT Manager. Such written permission must clearly state which software may be installed and onto which computer(s) or device(s) it may be installed.</p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#0E151D] text-center">Anti-Virus Security Measures</h2>
                  <p>Most IT Systems (including all computers and servers) will be protected with suitable anti-virus, firewall and internet security software. All such anti-virus, firewall and internet security software will be kept up-to-date with the latest software updates and definitions.</p>
                  <p>All IT Systems protected by anti-virus software will be subject to a full system scan at least once a week.</p>
                  <p>Storage media (e.g. USB memory sticks or disks of any kind) is only used for backup purposes by authorised Users. Files will be virus-scanned before any files are transferred. Such virus scans shall be performed by the IT Staff / Manager.</p>
                  <p>Users shall not be permitted to transfer files using cloud storage systems. All files downloaded from any cloud storage system must be scanned for viruses during the download process.</p>
                  <p>Any files being sent to third parties outside the Company, whether by email, on physical media or by other means (e.g. FTP or shared cloud storage) must be scanned for viruses before being sent or as part of the sending process, as appropriate.</p>
                  <p>Where any virus is detected by a User this must be reported immediately to the IT Department (this rule shall apply even where the anti-virus software automatically fixes the problem). The IT Department shall promptly take any and all necessary action to remedy the problem. In limited circumstances this may involve the temporary removal of the affected computer or device.</p>
                  <p>Where any User deliberately introduces any malicious software or virus to the IT Systems this will constitute a criminal offence under the Computer Misuse Act 1990 and will be handled as appropriate under the Company’s disciplinary procedures.</p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#0E151D] text-center">Hardware Security Measures</h2>
                  <p>No Users shall have access to any IT Systems not intended for normal use by Users (including such devices mentioned above) without the express permission of the IT Manager. Under normal circumstances whenever a problem with such IT Systems is identified by a User, that problem must be reported to the IT Department. Under no circumstances should a User attempt to rectify any such problems without the express permission (and, in most cases, instruction and/or supervision) of the IT Manager.</p>
                  <p>All mobile devices (including, but not limited to, laptops, netbooks, tablets, PDAs and mobile telephones) provided by the Company should always be transported securely and handled with care. In circumstances where such mobile devices are to be left unattended, they should be placed inside a lockable case or other suitable containers. Users should make all reasonable efforts to avoid such mobile devices from being left unattended at any location other than their private homes or Company premises. If a User has reason to believe that another individual has obtained their password they should change their password immediately and report the suspected breach of security to the IT Department.</p>
                  <p>The IT Department shall maintain a complete asset register of all IT Systems. All IT Systems shall be labelled and the corresponding data shall be kept on the asset register.</p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#0E151D] text-center">Access Security</h2>
                  <p>All IT Systems (and in particular mobile devices including, but not limited to, laptops, netbooks, tablets, PDAs and mobile telephones) shall be protected with a secure password or such other form of secure log-in system as the IT Department may deem appropriate. Such alternative forms of secure log-in may include fingerprint identification and facial recognition.</p>
                  <p>All passwords must, where the software, computer or device allows:</p>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>be at least 8 characters long;</li>
                    <li>contain a combination of upper case, lower case and numbers;</li>
                    <li>be different from the previous password;</li>
                    <li>not be obvious or easily guessed (e.g. birthdays or other memorable dates, memorable names, events or places etc.); and</li>
                    <li>be created by individual Users.</li>
                  </ul>
                  <p>Passwords should be kept secret by each User. Under no circumstances should a User share their password with anyone including the IT Manager and the IT Staff. No User will be legitimately asked for their password by anyone at any time and any such request should be refused. If a User has reason to believe that another individual has obtained their password they should change their password immediately and report the suspected breach of security to the IT Department.</p>
                  <p>If a User forgets their password, this should be reported to the IT Department. The IT Department will take the necessary steps to restore the User’s access to the IT Systems which may include the issuing of a temporary password which may be fully or partially known to the member of the IT Staff responsible for resolving the issue. A new password must be set up by the User immediately upon the restoration of access to the IT Systems.</p>
                  <p>All IT Systems with displays and user input devices (e.g. mouse, keyboard, touchscreen etc.) shall be protected, where possible, with a password protected screensaver that will activate after a maximum of 5 minutes of inactivity. This time period cannot be changed by Users and Users may not disable the screensaver. Activation of the screensaver will not interrupt or disrupt any other activities taking place on the computer (e.g. data processing).</p>
                  <p>Users may not use any software which may allow outside parties to access the IT Systems without the express consent of the IT Manager. Any such software must be reasonably required by the User for the performance of their job role and must be fully inspected and cleared by the IT Manager.</p>
                  <p>Users may use their own devices (including, but not limited to, mobile telephones, tablets and laptops) to access the Company’s e-mail system subject to the approval of the IT Department. Any and all instructions and requirements provided by the IT Department governing the use of Users’ own devices when connected to the Company network must be followed at all times. Users’ use of their own devices shall be subject to, and governed by, all relevant Company Policies (including, but not limited to, this Policy) while those devices are connected to the Company network or to any other part of the IT Systems. The IT Department shall reserve the right to request the immediate disconnection of any such devices without notice.</p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#0E151D] text-center">Data Protection</h2>
                  <p>All personal data (as defined in the General Data Protection Regulation) collected, held and processed by the Company will be collected, held and processed strictly in accordance with the Data Protection Principles of the General Data Protection Regulation and the Company’s Data Protection Policy.</p>
                  <p>All Users handling data for and on behalf of the Company shall be subject to, and must comply with, the provisions of the Company’s Data Protection Policy.</p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#0E151D] text-center">Internet and Email Use</h2>
                  <p>All Users shall be subject to, and must comply with, the provisions of the Company’s Communications, Email and Internet Policy when using the IT Systems.</p>
                  <p>Where provisions in this Policy require any additional steps to be taken to ensure IT security when using the internet or email over and above the requirements imposed by the Communications, Email and Internet Policy, Users must take such steps as required.</p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#0E151D] text-center">Reporting IT Security Breaches</h2>
                  <p>All concerns, questions, suspected breaches or known breaches shall be referred immediately to Kamil Khakimov.</p>
                  <p>Upon receiving a question or notification of a breach, the IT Department shall, within 2 hours assess the issue including, but not limited to, the level of risk associated therewith, and shall take any and all such steps as the IT Department deems necessary to respond to the issue.</p>
                  <p>Under no circumstances should a User attempt to resolve an IT security breach on their own without first consulting the IT Department. Users may only attempt to resolve IT security breaches under the instruction of, and with the express permission of, the IT Department.</p>
                  <p>All IT security breaches, whether remedied by the IT Department or by a User under the IT Department’s direction, shall be fully documented.</p>
                </section>

                <section className="space-y-4 pb-20">
                  <h2 className="text-2xl font-semibold text-[#0E151D] text-center">Implementation of Policy</h2>
                  <p>This Policy shall be deemed effective as of 1st December 2018. No part of this Policy shall have retroactive effect and shall thus apply only to matters occurring on or after this date.</p>
                  <p className="pt-6">This Policy has been approved and authorised by:</p>
                  <p>Name: Rob Dykes</p>
                  <p>Position: Managing Director</p>
                  <p>Date: 1st December 2018</p>
                </section>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
