import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import DropdownProfile from "./DropdownProfile";
import { Link } from "react-router-dom";

const Navbar = () => {
    const user = useSelector(store => store.user);
    const [isOpen, setIsOpen] = useState(false);

    const closeDropdown = () => setIsOpen(false);

    return (
        <div className="flex justify-between px-10 py-3 items-center bg-base-300 shadow-sm">
            <div>
                <Link to = { user ? '/' : '/login' }>
                    <button className="btn btn-soft btn-accent text-lg">DevTinder</button>
                </Link>
            </div>
            <div>
                {
                    user && (
                        <div>
                            <div className="flex items-center">
                                <motion.p 
                                    initial = {{ opacity: 0, x: 20 }}
                                    animate = {{ opacity: 1, x: 0 }}
                                    transition = {{ duration: 0.5 }}
                                    className="text-xs text-primary font-[700] text-wrap w-20 text-center me-3">
                                        Welcome, { user.firstName }
                                    </motion.p>

                                <motion.img
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    src = { user.photoUrl }
                                    alt="Tailwind CSS Navbar component"
                                    className="w-10 h-10 shadow rounded-full cursor-pointer" onClick={() => setIsOpen(!isOpen)}
                                />
                            </div>

                            {isOpen && <DropdownProfile closeDropdown = { closeDropdown } />}
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Navbar;