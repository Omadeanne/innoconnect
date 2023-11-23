import React from 'react'
import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';

export default function TermsCondition() {
  return(
    <div>
      <Nav />
  <main>
    <div className="mx-28">
      <div className="flex text-center my-16">
        <div className=" ">
          <i className="fa-solid fa-chevron-left  border-black rounded-xl border-2 border-solid p-2" />
        </div>
        <div className="text-center m-auto justify-center items-center">
          <h1 className="font-bold text-4xl ">Terms and conditions</h1>
        </div>
      </div>
      <div className=" p-1 ">
        <div className="my-4">
          <h4 className="font-bold">Terms and conditions</h4>
        </div>
        <div className="my-4">
          <p className>** Last Update:[1st January 2023]**</p>
        </div>
        <div className="my-4  ">
          <p>** Please read these terms and conditions ("Terms") carefully before using www.innconnect.com
            (the "Service") operated by Innoconnect inc. ("us," "we," or "our"). **
          </p> <br />
          <p>** By accessing or using the Service, you agree to be bound by these Terms. If you disagree with
            any part of these Terms, please do not use the Service. **
          </p>
          <div className="my-4 ">
            <p className="mb-2"> 1. Acceptance of Terms
            </p>
            <p>1.1. **By using the Service, you represent that you are at least 18 years old and have legal
              capacity to enter into this agreement. If you are accessing the Service on behalf of an
              entity, you represent and warrant that you have the authority to bind that entity to these
              Terms.**
            </p>
          </div>
          <div className="my-4">
            <p className="mb-2">2. Use of the Service</p>
            <p className="mb-2">2.1. **You may use the Service for your personal or business use, subject to
              these Terms.**
            </p>
            <p>2.2. **You are responsible for any content or information you submit or transmit through the
              Service, and you agree not to use the Service for any unlawful or prohibited purpose.**
            </p>
          </div>
          <div className="my-4">
            <p className="mb-2"> 3. Privacy Policy</p>
            <p>3.1. **Your use of the Service is also governed by our Privacy Policy, which can be found at
              [Link to Privacy Policy].**
            </p>
          </div>
          <div className="my-4">
            <p className="mb-2">4. User Accounts
            </p>
            <p className="mb-2">4.1. **To access certain features of the Service, you may be required to create
              an account. You agree to provide accurate, current, and complete information during the
              registration process and to update such information to keep it accurate, current, and
              complete.**
            </p>
            <p>4.2. **You are responsible for maintaining the confidentiality of your account credentials
              and for all activities that occur under your account. You agree to notify us immediately of
              any unauthorized use of your account.**
            </p>
          </div>
          <div className="my-4">
            <p className="mb-2">5. Termination</p>
            <p>5.1. **We reserve the right to terminate or suspend your access to the Service at our sole
              discretion, without notice, for any conduct that we believe violates these Terms or is
              harmful to other users or us.**
            </p>
          </div>
          <div className="my-4">
            <p className="mb-2">6. Intellectual Property</p>
            <p>6.1. **All content, trademarks, logos, and intellectual property displayed on the Service are
              the property of Innoconnect inc and are protected by applicable copyright and trademark
              laws. You may not use, modify, reproduce, or distribute any content from the Service without
              our prior written consent.**
            </p>
          </div>
          <div className="my-4">
            <p className="mb-2"> 7. Disclaimer of Warranty</p>
            <p>7.1. **The Service is provided "as is" and "as available" without warranties of any kind,
              either express or implied, including, but not limited to, the implied warranties of
              merchantability, fitness for a particular purpose, or non-infringement.**
            </p>
          </div>
          <div className="my-4">
            <p className="mb-2">8. Limitation of Liability</p>
            <p>8.1. **In no event shall Innoconnect be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred
              directly or indirectly, or any loss of data, use, goodwill, or other intangible losses,
              resulting from (a) your use or inability to use the Service; (b) any unauthorized access to
              or use of our servers and/or any personal information stored therein; (c) any interruption
              or cessation of transmission to or from the Service; or (d) any bugs, viruses, Trojan
              horses, or the like, which may be transmitted to or through the Service by any third
              party.**
            </p>
          </div>
          <div className="my-4">
            <p className="mb-2">9. Changes to Terms
            </p>
            <p>9.1. **We reserve the right to modify or replace these Terms at any time. It is your
              responsibility to check these Terms periodically for changes. Your continued use of the
              Service following the posting of any changes to these Terms constitutes acceptance of those
              changes.**
            </p>
          </div>
          <div className="my-4">
            <p className="mb-2">10. Governing Law
            </p>
            <p>10.1. **These Terms shall be governed by and construed in accordance with the laws of the
              Federal Republic of Nigeria without regard to its conflict of law principles.**
            </p>
          </div>
          <div className="my-4">
            <p className="mb-2">11. Contact Us
            </p>
            <p>11.1. **If you have any questions about these Terms, please contact us at
              enquiries@innconnect.com.**
            </p>
          </div>
        </div>
      </div>
      <div className="justify-center items-center text-center bg-[#37627E] rounded-lg my-5 w-28 ">
        <button className=" text-white p-3   ">Back</button>
      </div>
    </div>
  </main>
  <Footer />
</div>

  )
}