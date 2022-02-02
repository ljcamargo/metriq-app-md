import iqtLogo from './../images/iqt_logo.png'
import ufLogo from './../images/unitary_fund_logo.png'

const Partners = () => {
  return (
    <div id='metriq-main-content' className='container'>
      <div className='row'>
        <div className='col-md-2' />
        <div className='col-md-8 text-justify'>
          <h1 className='text-center'>Our Partners and Supporters</h1>
          <div>
            <p>
              We thank the following organizations and institutions for their support.
            </p>
            <p>
              If your organization or institution would like to become a partner, please contact us at <a href='mailto:metriq@unitary.fund'>metriq@unitary.fund</a>.
            </p>
            <div className='text-center'>
              <img src={iqtLogo} alt='IQT partner logo' className='logo-image' />
              <img src={ufLogo} alt='UF partner logo' className='logo-image' />
            </div>
          </div>
        </div>
        <div className='col-md-2' />
      </div>
    </div>
  )
}

export default Partners