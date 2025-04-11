export const Button = ({ href, children, className }) => {
    return (
    <div className={`Button ${className}`}>
        <a href={href} className="inline-flex items-center gap-2">
        {children}
        </a>
    </div>
    );
};