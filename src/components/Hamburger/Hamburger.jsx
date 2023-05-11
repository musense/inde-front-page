import styles from './hamburger.module.css'

export default function Hamburger({ id, toggleHamburger, unCheck }) {

    function handClick(e) {        
        toggleHamburger(e)
    }

    return (
        <div className={styles['hamburger']}>
            <input id={id} type="checkbox" onClick={handClick} name="hamburger-check" />
            <span></span>
            <span></span>
            <span></span>
            <button onClick={unCheck} type="button"
                style={{
                    position: 'absolute',
                    display: 'none',
                    right: '10000rem',
                }} />
        </div>
    )
}
