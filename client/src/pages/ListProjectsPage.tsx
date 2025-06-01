import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { QUERY_ALL_PROJECTS } from '../utils/queries';
import { Link } from 'react-router-dom';

interface Material {
    id: string;
    name: string;
    quantity: number;
    unit: 'sqft' | 'pieces' | 'gallons';
    cost: number;
}

interface ProjectData {
    name: string;
    description: string;
    budget: number;
    materials: Material[];
    tasks?: any[];
}

export default function ProjectListPage() {
    const { data} = useQuery(QUERY_ALL_PROJECTS);
    const projects = data?.getAllProjects || [];
console.log(projects);
    const handleDelete = (indexToRemove: number) => {
      
    };

console.log(data);
    return (
        <div className="project-list-page">
            <h1>Project List</h1>
            {projects.length === 0 ? (
                <p>No projects found.</p>
            ) : (
                <ul>
                    {projects.map((project : any, index: number) => (
                        <li key={index} style={{ marginBottom: '1.5rem' }}>
                            <Link to = "/"><h2>{project.name}</h2></Link> 
                            <p>{project.description}</p>
                            <p><strong>Budget:</strong> ${project.budget}</p>
                            <h4>Materials:</h4>
                            <ul>
                                {project.materials?.map((mat : any) => (
                                    <li key={mat.id}>
                                        {mat.name} - {mat.quantity} {mat.unit} (${mat.cost})
                                    </li>
                                ))}
                            </ul>
                            <button
                                style={{ marginTop: '0.5rem', backgroundColor: '#e74c3c', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px' }}
                                onClick={() => handleDelete(index)}
                            >
                                Delete Project
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}