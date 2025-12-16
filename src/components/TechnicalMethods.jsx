import React from "react";

export default function TechnicalMethods() {
  return (
    <section className="section">
      <h2>Technical Methods</h2>

      <div className="grid">
        <div className="card">
          <h3>Perception</h3>
          <ul>
            <li>RGB color averaging over image center</li>
            <li>Distance-based trigger for grasp timing</li>
          </ul>
        </div>

        <div className="card">
          <h3>Control & Kinematics</h3>
          <ul>
            <li>Joint-space control via Webots motors</li>
            <li>Forward kinematics to verify end-effector pose</li>
            <li>Custom inverse kinematics for pick-and-place</li>
            <li>Smooth joint interpolation for stable grasps</li>
          </ul>
        </div>

        <div className="card">
          <h3>FSM Logic</h3>
          <ul>
            <li>WAITING → ANALYZING → GRASPING</li>
            <li>ROTATING → RELEASING → RETURNING</li>
            <li>Enables clean timing + debugging</li>
          </ul>
        </div>

        <div className="card">
          <h3>Experimental Design</h3>
          <p>
            Two experiments were conducted to evaluate system performance. The
            first tested color-based sorting accuracy by measuring successful
            pick-and-place operations across randomized trials with varying
            block arrival times.
          </p>
          <p>
            The second evaluated trajectory stability by comparing direct IK
            motion against interpolated joint-space trajectories. Metrics
            included grasp success rate and motion smoothness.
          </p>
        </div>

        <div className="card">
          <h3>Results & Discussion</h3>
          <p>
            The system achieved approximately 95% sorting accuracy across trials.
            Failures were mainly caused by delayed perception updates, conveyor
            drift, or minor grasp misalignment.
          </p>
          <p>
            Joint-space interpolation improved grasp success from roughly 75% to
            90%, showing smoother motion reduced overshoot and increased
            stability.
          </p>
        </div>

        <div className="card">
          <h3>Reflection & Future Work</h3>
          <p>
            Future improvements include better perception timing, classification
            beyond color, and deployment on a physical robot. More advanced
            planning/filtering could further improve robustness.
          </p>
        </div>
      </div>
    </section>
  );
}
