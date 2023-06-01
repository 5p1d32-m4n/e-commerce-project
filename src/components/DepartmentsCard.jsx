export default function DepartmentsCard({ department }) {
    return (
        <div key={department._id} className="department-card">
            <div className="department-card--image">
                <img src={department.image} alt="Department" />
            </div>
            <div className="department-card--name">
                <p>{department.name}</p>
            </div>
        </div>
    )
}

/**TODO:
 * 
 * 1.   Build department card with 420 x 470 images
 * 2.   Use baked in images, don't over complicate your life with the API.
 * 3.   Implement CSS for shaded box and light text.
 * 
 * 
 */