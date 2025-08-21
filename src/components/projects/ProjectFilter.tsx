import { useState } from 'react';
import { Search } from 'lucide-react';
import { projectCategories, type Project } from '../../config/projectCatalog';

interface ProjectFilterProps {
  projects: Project[];
  onFilterChange: (filteredProjects: Project[]) => void;
}

const ProjectFilter = ({ projects, onFilterChange }: ProjectFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterProjects(category, searchTerm);
  };

  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
    filterProjects(selectedCategory, search);
  };

  const filterProjects = (category: string, search: string) => {
    let filtered = projects;

    if (category !== 'All') {
      filtered = filtered.filter(project => project.category === category);
    }

    if (search) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.location.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    onFilterChange(filtered);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;