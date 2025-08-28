"use client"

import { Select } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function SelectExamples() {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Selected value:", event.target.value)
  }

  return (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Basic Select</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="basic-select">Choose your state</Label>
              <Select id="basic-select" onChange={handleSelectChange}>
                <option value="">Select a state</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
              </Select>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Select with Default Value</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="default-select">Department</Label>
              <Select id="default-select" defaultValue="veterans" onChange={handleSelectChange}>
                <option value="">Choose a department</option>
                <option value="agriculture">Department of Agriculture</option>
                <option value="commerce">Department of Commerce</option>
                <option value="defense">Department of Defense</option>
                <option value="education">Department of Education</option>
                <option value="energy">Department of Energy</option>
                <option value="health">Department of Health and Human Services</option>
                <option value="homeland">Department of Homeland Security</option>
                <option value="housing">Department of Housing and Urban Development</option>
                <option value="interior">Department of the Interior</option>
                <option value="justice">Department of Justice</option>
                <option value="labor">Department of Labor</option>
                <option value="state">Department of State</option>
                <option value="transportation">Department of Transportation</option>
                <option value="treasury">Department of the Treasury</option>
                <option value="veterans">Department of Veterans Affairs</option>
              </Select>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Disabled Select</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="disabled-select">Unavailable Options</Label>
              <Select id="disabled-select" disabled>
                <option value="">This select is disabled</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </Select>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Multiple Select Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="priority-select">Priority Level</Label>
              <Select id="priority-select" onChange={handleSelectChange}>
                <option value="">Select priority</option>
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
                <option value="urgent">Urgent</option>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="category-select">Category</Label>
              <Select id="category-select" onChange={handleSelectChange}>
                <option value="">Choose category</option>
                <option value="general">General Inquiry</option>
                <option value="technical">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="feedback">Feedback</option>
                <option value="complaint">Complaint</option>
              </Select>
            </div>
          </div>
        </div>
      </div>
  )
}