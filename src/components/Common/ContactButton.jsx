import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactButton() {
    return (
        <>
            <div className="mt-10 flex">
                <Link
                    to="/contact"
                    className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm hover:bg-cyan-500 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                >
                    Contact <span aria-hidden="true">&rarr;</span>
                </Link>
            </div>
        </>
    );
}
