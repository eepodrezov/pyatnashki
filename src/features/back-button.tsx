import BackIcon from '../assets/icons/back-arrow.svg'

export const BackButton = () => {
    function clearSelectedValue() {
        localStorage.setItem('selectedValue','')
    }
    function back() {
        clearSelectedValue()
        window.location.href = '/'
    }
  return (
    <button
        className='absolute top-10 left-10'
        onClick={back}
    >
        <img 
            src={BackIcon} 
            alt="backbutton" 
            width={20}
        />
    </button>
  )
}
