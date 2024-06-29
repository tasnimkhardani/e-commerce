import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between flex-row py-4 px-4 border-b-2">
            <h1 className="text-xl font-bold">Shop</h1>
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger><Menu /></SheetTrigger>
                    <SheetContent>
                        <p>Contact</p>
                        <p>Account</p>
                        <p>Cart</p>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="hidden flex-row md:flex gap-2">
                <p>Contact</p>
                <p>Account</p>
                <p>Cart</p>
            </div>
        </div>
    );
}

export default Navbar;