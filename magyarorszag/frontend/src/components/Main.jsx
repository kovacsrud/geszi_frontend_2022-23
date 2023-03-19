import {Link} from 'react-router-dom';

function Main() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Magyarország helyiség adatok</h1>
                    <p className="py-6">Települések, megyék, jogállás szerint</p>
                    <Link className='m-5 text-xl font-bold' to="/helyisegek">Helyiségek listája</Link>
                    <Link className='m-5 text-xl font-bold'>Helyiségek megye szerint</Link>
                </div>
            </div>
        </div>
    )
}

export default Main