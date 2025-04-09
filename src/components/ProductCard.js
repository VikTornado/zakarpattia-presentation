export default function ProductCard({
  nameUa,
  nameEn,
  location,
  products,
  descriptionUa,
  descriptionEn,
  contacts,
  website,
}) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 mb-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold mb-1">{nameEn}</h2>
      <h3 className="text-md text-gray-600 dark:text-gray-300 mb-2">
        {nameUa}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
        {location}
      </p>
      <p className="text-sm text-gray-800 dark:text-gray-200 mb-3 font-medium">
        {products}
      </p>
      <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">
        <p className="mb-1">
          <strong>UA:</strong> {descriptionUa}
        </p>
        <p>
          <strong>EN:</strong> {descriptionEn}
        </p>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        {contacts.map((contact, i) => (
          <p key={i}>{contact}</p>
        ))}
      </div>
      {website && (
        <a
          href={website}
          className="text-blue-600 dark:text-blue-400 text-sm underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {website}
        </a>
      )}
    </div>
  );
}
