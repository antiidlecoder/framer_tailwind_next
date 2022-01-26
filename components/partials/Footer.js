import React from 'react';

function Footer() {
    return (
        <footer className="py-20 bg-blue-600">
            <div className="container">
                <div className="flex text-white justify-between">
                    <div>
                        <h2 className="text-4xl mb-6">Contact</h2>
                        <div>
                            <p className="font-bold text-xl mb-1">smewhrlse</p>
                            <div className="text-lg">
                                <p>Musterstr. 123</p>
                                <p>1111 Everywhere</p>
                                <p>gm@smewhrlse.com</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl mb-6">Newsletter</h2>
                        <div className="relative">
                            <input type="text" className="border-b-white placeholder-white border-b bg-transparent text-lg focus:outline-none p-2" placeholder="Email" />
                            <button className="text-2xl absolute right-0 bottom-1">→</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
