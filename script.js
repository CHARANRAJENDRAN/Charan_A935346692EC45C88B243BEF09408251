document.getElementById('descriptionForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const productName = document.getElementById('product_name').value;
    const features = document.getElementById('features').value.split(',').map(f => f.trim());
    const category = document.getElementById('category').value;
    const audience = document.getElementById('audience').value;

    const response = await fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            product_name: productName,
            features: features,
            category: category,
            audience: audience,
        }),
    });

    if (response.ok) {
        const result = await response.json();
        document.getElementById('description').innerText = result.description;
        document.getElementById('output').style.display = 'block';
    } else {
        document.getElementById('description').innerText = 'Error generating description. Please try again.';
        document.getElementById('output').style.display = 'block';
    }
});
