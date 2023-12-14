import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div>
      <Nav />
      <main>
        <section className='text-white bg-primary-05 '>
          <div className='py-8 container mx-auto px-4'>
            <h1 className='text-center text-3xl lg:text-5xl font-bold my-3'>
              Our Pricing
            </h1>
            <p className='text-center text-lg font-medium my-3'>
              Our pricing plans are designed to suit your needs
            </p>
          </div>
        </section>
        <div className='py-8 container mx-auto px-4 flex flex-col lg:flex-row justify-center items-center gap-10 min-h-[40rem]'>
          <div className='border border-primary-05 shadow-btn rounded-xl p-8 w-11/12 sm:w-80'>
            <div className='text-center text-primary-05'>
              <h3 className='text-xl font-semibold'>Free</h3>
              <p className='text-2xl font-semibold my-2 '>₦ 0</p>
              <p className='text-lg mt-4 mb-14 font-semibold'>Basic Plan</p>
            </div>
            <hr />
            <ul className='my-4 text-sm w-fit mx-auto'>
              <li className='font-medium'>
                <i className='fas fa-check mr-2' />1 mentor
              </li>
              <li className='font-medium'>
                <i className='fas fa-check mr-2' />1 job
              </li>
              <li className='font-medium'>
                <i className='fas fa-check mr-2' />1 course
              </li>
            </ul>
            <hr />
            <button className='my-4 w-full text-gray-500 font-semibold border border-secondary-06 text-center rounded-lg px-4 py-2 block  transition-all cursor-not-allowed'>
              Current plan
            </button>
          </div>
          <div className='border border-primary-05 shadow-btn rounded-xl p-8 w-11/12 sm:w-80'>
            <div className='text-center text-primary-05'>
              <h3 className='text-xl font-semibold'>Premium</h3>
              <p className='text-gray-500 font-semibold mt-4'>
                Billed Annually ₦ 12,000
              </p>
              <p className='text-2xl font-semibold my-2'>₦ 1000/month</p>
              <p className='text-lg my-4 font-semibold'>14 days free trial</p>
            </div>
            <hr />
            <ul className='my-4 text-sm w-fit mx-auto'>
              <li className='font-medium'>
                <i className='fas fa-check mr-2' />
                Unlimited mentorship
              </li>
              <li className='font-medium'>
                <i className='fas fa-check mr-2' />
                Unlimited jobs
              </li>
              <li className='font-medium'>
                <i className='fas fa-check mr-2' />
                Unlimited courses
              </li>
            </ul>
            <hr />
            <Link
              to = {`/payment/1`}
              className='text-center text-white w-full block my-4 font-semibold border bg-secondary-06 border-secondary-06 rounded-lg px-4 py-2 active:bg-secondary-07 hover:shadow-btn'
            >
              Get started
            </Link>
          </div>
          <div className='border border-primary-05 shadow-btn rounded-xl p-8 w-11/12 sm:w-80'>
            <div className='text-center text-primary-05'>
              <h3 className='text-xl font-semibold'>Enterprise</h3>
              <p className='text-gray-500 font-semibold mt-4'>Billed Monthly</p>
              <p className='text-2xl font-semibold mt-2 mb-14'>₦ 1,500/month</p>
            </div>
            <hr />
            <ul className='my-4 text-sm w-fit mx-auto'>
              <li className='font-medium'>
                <i className='fas fa-check mr-2' />
                Unlimited mentorship
              </li>
              <li className='font-medium'>
                <i className='fas fa-check mr-2' />
                Unlimited jobs
              </li>
              <li className='font-medium'>
                <i className='fas fa-check mr-2' />
                Unlimited courses
              </li>
            </ul>
            <hr />
            <a
              href='https://paystack.com/pay/34u8nfj1do'
              className='my-4 w-full text-primary-05 font-semibold border border-secondary-06 text-center rounded-lg px-4 py-2 block  transition-all hover:bg-[#6A95B1] hover:bg-opacity-20'
            >
              Get started
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
