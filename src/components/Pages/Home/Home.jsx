import css from './home.module.css';

export default function Home() {
    return (
        <div className={css.home}>
            <h1 className={css.title}>
                Welcome to Phone Book
            </h1>
        </div>
    )
}