import { projectSteps } from '@/data/studio';

export function ProjectSteps() {
  return (
    <ol className="border-border grid border-y md:grid-cols-2 lg:grid-cols-4">
      {projectSteps.map((step, index) => (
        <li
          key={step.title}
          className="reveal border-border border-b px-1 py-8 last:border-b-0 md:px-6 md:odd:border-r lg:border-b-0 lg:border-l lg:first:border-l-0 lg:odd:border-r-0 md:[&:nth-child(3)]:border-b-0"
        >
          <span className="text-muted font-mono text-xs">Step {index + 1}</span>
          <h3 className="mt-6 text-xl font-semibold tracking-[-0.04em]">{step.title}</h3>
          <p className="text-muted mt-3 leading-7">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
