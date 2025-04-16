import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [disasters, setDisasters] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [disasterForm, setDisasterForm] = useState({
    disasterType: '0',
    latitude: '',
    longitude: '',
    floodLevel: '',
    windSpeed: '',
    rainfall: '',
    temperature: '',
    populationDensity: '',
    areaType: '0',
    infrastructureScore: ''
  });

  // Mock data for demonstration - replace with actual API calls
  useEffect(() => {
    // This would be replaced with an actual API call
    const mockDisasters = [
      { id: 1, type: 'Flood', location: 'Chennai', latitude: 13.0827, longitude: 80.2707, status: 'Active', severity: 'High', affected: '12,000', timestamp: '2023-07-15T08:30:00' },
      { id: 2, type: 'Cyclone', location: 'Vishakhapatnam', latitude: 17.6868, longitude: 83.2185, status: 'Active', severity: 'Severe', affected: '25,000', timestamp: '2023-07-14T16:45:00' },
      { id: 3, type: 'Earthquake', location: 'Sikkim', latitude: 27.5330, longitude: 88.5122, status: 'Active', severity: 'Moderate', affected: '8,500', timestamp: '2023-07-16T03:15:00' },
      { id: 4, type: 'Heatwave', location: 'Delhi', latitude: 28.7041, longitude: 77.1025, status: 'Active', severity: 'High', affected: '35,000', timestamp: '2023-07-12T10:00:00' },
      { id: 5, type: 'Landslide', location: 'Munnar', latitude: 10.0889, longitude: 77.0595, status: 'Active', severity: 'Moderate', affected: '3,200', timestamp: '2023-07-13T14:20:00' },
    ];
    setDisasters(mockDisasters);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDisasterForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Disaster creation form submitted:', disasterForm);
    
    // Here you would make an API call to create the disaster
    // After successful creation, update the disasters list
    
    // For demonstration, simply add to the list locally
    const newDisaster = {
      id: disasters.length + 1,
      type: getDisasterTypeLabel(disasterForm.disasterType),
      location: `Lat: ${disasterForm.latitude}, Long: ${disasterForm.longitude}`,
      latitude: parseFloat(disasterForm.latitude),
      longitude: parseFloat(disasterForm.longitude),
      status: 'Active',
      severity: 'Medium',
      affected: '0',
      timestamp: new Date().toISOString()
    };
    
    setDisasters([...disasters, newDisaster]);
    setShowCreateForm(false);
    
    // Reset the form
    setDisasterForm({
      disasterType: '0',
      latitude: '',
      longitude: '',
      floodLevel: '',
      windSpeed: '',
      rainfall: '',
      temperature: '',
      populationDensity: '',
      areaType: '0',
      infrastructureScore: ''
    });
  };

  const getDisasterTypeLabel = (type) => {
    const types = {
      '0': 'Flood',
      '1': 'Cyclone',
      '2': 'Earthquake',
      '3': 'Landslide',
      '4': 'Heatwave'
    };
    return types[type] || 'Unknown';
  };

  const getAreaTypeLabel = (type) => {
    const types = {
      '0': 'Urban',
      '1': 'Suburban',
      '2': 'Rural'
    };
    return types[type] || 'Unknown';
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h1>Active Disasters</h1>
          <p className="dashboard-subtitle">Monitor and manage ongoing disaster situations</p>
        </div>
        <button 
          className="create-disaster-btn"
          onClick={() => setShowCreateForm(true)}
        >
          + Create Disaster
        </button>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon emergency">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <div className="stat-content">
            <h3>{disasters.length}</h3>
            <p>Active Disasters</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon warning">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
          </div>
          <div className="stat-content">
            <h3>{disasters.filter(d => d.severity === 'High' || d.severity === 'Severe').length}</h3>
            <p>High Severity</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon info">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0"/>
              <circle cx="12" cy="8" r="2"/>
            </svg>
          </div>
          <div className="stat-content">
            <h3>{disasters.length > 0 ? disasters.length : 0}</h3>
            <p>Affected Regions</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon success">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <div className="stat-content">
            <h3>83,700</h3>
            <p>People Affected</p>
          </div>
        </div>
      </div>

      <div className="disasters-grid">
        {disasters.length > 0 ? (
          disasters.map(disaster => (
            <div key={disaster.id} className={`disaster-card disaster-type-${disaster.type.toLowerCase()}`}>
              <div className="disaster-header">
                <h3>{disaster.type}</h3>
                <span className={`status-badge ${disaster.severity.toLowerCase()}`}>
                  {disaster.severity}
                </span>
              </div>
              <div className="disaster-details">
                <div className="location-info">
                  <p><strong>Location:</strong> {disaster.location}</p>
                  <p><strong>Coordinates:</strong> {disaster.latitude.toFixed(4)}, {disaster.longitude.toFixed(4)}</p>
                </div>
                <div className="disaster-meta">
                  <div className="meta-item">
                    <span className="meta-label">Status</span>
                    <span className="meta-value">{disaster.status}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Affected</span>
                    <span className="meta-value">{disaster.affected}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Reported</span>
                    <span className="meta-value">{formatDate(disaster.timestamp)}</span>
                  </div>
                </div>
              </div>
              <div className="disaster-actions">
                <button className="view-btn">View Details</button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-disasters">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="6" width="20" height="12" rx="2"/>
              <path d="M12 12h.01"/>
              <path d="M17 12h.01"/>
              <path d="M7 12h.01"/>
            </svg>
            <h3>No Active Disasters</h3>
            <p>There are currently no active disasters to display.</p>
          </div>
        )}
      </div>
      
      {/* Create Disaster Form Modal */}
      {showCreateForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Create New Disaster Alert</h2>
              <button 
                className="close-btn"
                onClick={() => setShowCreateForm(false)}
              >
                &times;
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="input-group">
                  <label htmlFor="disasterType">Disaster Type</label>
                  <select
                    id="disasterType"
                    name="disasterType"
                    value={disasterForm.disasterType}
                    onChange={handleChange}
                    required
                  >
                    <option value="0">Flood (0)</option>
                    <option value="1">Cyclone (1)</option>
                    <option value="2">Earthquake (2)</option>
                    <option value="3">Landslide (3)</option>
                    <option value="4">Heatwave (4)</option>
                  </select>
                </div>
                
                <div className="input-group">
                  <label htmlFor="latitude">Latitude</label>
                  <input
                    type="number"
                    step="0.000001"
                    id="latitude"
                    name="latitude"
                    value={disasterForm.latitude}
                    onChange={handleChange}
                    placeholder="Enter latitude"
                    required
                  />
                </div>
                
                <div className="input-group">
                  <label htmlFor="longitude">Longitude</label>
                  <input
                    type="number"
                    step="0.000001"
                    id="longitude"
                    name="longitude"
                    value={disasterForm.longitude}
                    onChange={handleChange}
                    placeholder="Enter longitude"
                    required
                  />
                </div>
                
                {/* Conditional fields based on disaster type */}
                {disasterForm.disasterType === '0' && (
                  <div className="input-group">
                    <label htmlFor="floodLevel">Flood Level</label>
                    <input
                      type="number"
                      id="floodLevel"
                      name="floodLevel"
                      value={disasterForm.floodLevel}
                      onChange={handleChange}
                      placeholder="Enter flood level (meters)"
                      required
                    />
                  </div>
                )}
                
                {disasterForm.disasterType === '1' && (
                  <>
                    <div className="input-group">
                      <label htmlFor="windSpeed">Wind Speed</label>
                      <input
                        type="number"
                        id="windSpeed"
                        name="windSpeed"
                        value={disasterForm.windSpeed}
                        onChange={handleChange}
                        placeholder="Enter wind speed (km/h)"
                        required
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="rainfall">Rainfall</label>
                      <input
                        type="number"
                        id="rainfall"
                        name="rainfall"
                        value={disasterForm.rainfall}
                        onChange={handleChange}
                        placeholder="Enter rainfall (mm)"
                        required
                      />
                    </div>
                  </>
                )}
                
                {disasterForm.disasterType === '4' && (
                  <div className="input-group">
                    <label htmlFor="temperature">Temperature</label>
                    <input
                      type="number"
                      id="temperature"
                      name="temperature"
                      value={disasterForm.temperature}
                      onChange={handleChange}
                      placeholder="Enter temperature (°C)"
                      required
                    />
                  </div>
                )}
                
                {/* Always appearing fields */}
                <div className="input-group">
                  <label htmlFor="populationDensity">Population Density</label>
                  <input
                    type="number"
                    id="populationDensity"
                    name="populationDensity"
                    value={disasterForm.populationDensity}
                    onChange={handleChange}
                    placeholder="Enter population density"
                    required
                  />
                </div>
                
                <div className="input-group">
                  <label htmlFor="areaType">Area Type</label>
                  <select
                    id="areaType"
                    name="areaType"
                    value={disasterForm.areaType}
                    onChange={handleChange}
                    required
                  >
                    <option value="0">Urban (0)</option>
                    <option value="1">Suburban (1)</option>
                    <option value="2">Rural (2)</option>
                  </select>
                </div>
                
                <div className="input-group">
                  <label htmlFor="infrastructureScore">Infrastructure Score (0-10)</label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    id="infrastructureScore"
                    name="infrastructureScore"
                    value={disasterForm.infrastructureScore}
                    onChange={handleChange}
                    placeholder="Enter score between 0-10"
                    required
                  />
                </div>
              </div>
              
              <div className="form-actions">
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setShowCreateForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-btn">Create Disaster Alert</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard; 