export const Shimmer = () => {
    return (
        <>
            <div className="shimmer-container flex flex-wrap gap-5 justify-center">
                {
                    Array(10).fill('').map((e, index) => <div className="card shimmer-card" key={index}></div>)
                }
            </div>

        </>
    )
}