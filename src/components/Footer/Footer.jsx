const Footer = () => {
    return (
        <div className="mt-5">
           <footer className="footer bg-base-200 text-base-content p-10 w-full">
                <nav className="mb-4 md:mb-0 w-full md:w-auto">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="mb-4 md:mb-0 w-full md:w-auto">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="mb-4 md:mb-0 w-full md:w-auto">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form className="w-full md:w-auto">
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-full md:w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item w-full md:w-auto" />
                            <button className="btn btn-primary join-item bg-gradient-to-r from-blue-600 via-blue-700 to-red-300">Subscribe</button>
                        </div>
                        <p className="pt-3">&copy; 2025 Md.Jahid Hasan. All rights reserved.</p>
                    </fieldset>
                </form>
           </footer>
        </div>
    );
};

export default Footer;
